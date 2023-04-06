import  { AxiosError } from "axios";
import type { FormEventHandler } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Gradient } from "../components/Gradient";
import { Icon } from "../components/Icon";
import { Input } from "../components/Input";
import { TopNav } from "../components/TopNav";

import { FormError, hasError, validate } from "../lib/validate";
import { useSignInStore } from "../stores/useSignInStore";
import { useLoadingStore } from "../stores/useLoadingStore";
import { useAjax } from "../lib/ajax";
import { BackIcon } from "../components/BackIcon";

export const SignInPage: React.FC = () => {
  const { data, error, setData, setError } = useSignInStore();
  const nav = useNavigate();
  const {post:postWithLoading} = useAjax({showLoading:true})
  const onSubmitError = (
    err: AxiosError<{ errors: FormError<typeof data> }>
  ) => {
    setError(err.response?.data?.errors ?? {});
    throw error;
  };
  const [search] = useSearchParams();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const newError = validate(data, [
      { key: "email", type: "required", message: "请输入邮箱地址" },
      {
        key: "email",
        type: "pattern",
        regex: /^.+@.+$/,
        message: "邮箱地址格式不正确",
      },
      { key: "code", type: "required", message: "请输入验证码" },
      {
        key: "code",
        type: "length",
        min: 6,
        max: 6,
        message: "验证码必须是6个字符",
      },
    ]);
    setError(newError);
    if (!hasError(newError)) {
      const response = await postWithLoading<{ jwt: string }>(
          "http://121.196.236.94:8080/api/v1/session",
          data
        )
        .catch(onSubmitError);
      const jwt = response.data.jwt;
      console.log("jwt", jwt);
      localStorage.setItem("jwt", jwt);
      const from = search.get('from') || '/items'
      nav(from);
    }
  };

  const {setVisible} = useLoadingStore()
  const sendSmsCode = async () => {
    const newError = validate({ email: data.email }, [
      {
        key: "email",
        type: "pattern",
        regex: /^.+@.+$/,
        message: "邮箱地址格式不正确",
      },
    ]);
    setError(newError);
    if (hasError(newError)) {throw new Error('表单出错')};
      // 请求
      setVisible(true)
      const response = await postWithLoading(
        "http://121.196.236.94:8080/api/v1/validation_codes",
        {
          email: data.email,
        }
      ).finally(()=>{
        setVisible(false)
      })
      return response; 
  };
  return (
    <div>
      <Gradient>
        <TopNav title="登录" icon={<BackIcon/>}/>
      </Gradient>
      <div text-center pt-40px pb-16px>
        <Icon name="logo" className="w-64px h-68px" />
        <h1 text-32px text="#7878FF" font-bold>
          山竹记账
        </h1>
      </div>
      <form j-form onSubmit={onSubmit}>
        <Input
          label="邮箱地址"
          type="text"
          placeholder="请输入邮箱，然后点击发送验证码"
          value={data.email}
          onChange={(value) => setData({ email: value })}
          error={error.email?.[0]}
        />

        <Input
          type="sms_code"
          label="验证码"
          placeholder="六位数字"
          value={data.code}
          onChange={(value) => setData({ code: value })}
          request={sendSmsCode}
        />
        <div mt-100px>
          <button j-btn type="submit">
            登录
          </button>
        </div>
      </form>
    </div>
  );
};
