import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    email: "",
    phone: "",
    kullaniciAdi: "",
    sifre1: "",
    sifre2: "",
  });

  


  const formBasliklari = [
    "E-Posta Adresi Gir",
    "Telefon Numaranı Ekle",
    "Kimliğini Oluştur",
  ];

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const sonraki = () => {
    if (formNo === 1) {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(state.email)) {
        toast.error("Lütfen geçerli bir e-posta adresi girin");
        return; // Hata durumunda işlemi sonlandır
      }
    }

    if (formNo === 1 && state.email) {
      setFormNo(formNo + 1);
    } else if (formNo === 2 && state.phone) {
      setFormNo(formNo + 1);
    } else if (
      formNo === 3 &&
      state.kullaniciAdi &&
      state.sifre1 &&
      state.sifre2 &&
      state.sifre1 === state.sifre2
    ) {
      setFormNo(formNo + 1);
    } else {
      toast.error("Lütfen tüm giriş alanlarını doldurun");
    }
  };

  const onceki = () => {
    setFormNo(formNo - 1);
  };

  const isEmailValid = (email) => {
    // Basit bir e-posta doğrulama regex kullanarak kontrol edebilirsiniz
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sonSubmit = () => {
    if (formNo === 3) {
      if (state.kullaniciAdi && state.sifre1 && state.sifre2) {
        if (state.sifre1 === state.sifre2) {
          if (isEmailValid(state.email)) {
            // Eğer e-posta geçerliyse, formu başarıyla gönder
            toast.success("Form başarıyla gönderildi");
          } else {
            toast.error("Geçersiz e-posta adresi");
          }
        } else {
          toast.error("Şifreler uyuşmuyor");
        }
      } else {
        toast.error("Lütfen tüm giriş alanlarını doldurun");
      }
    }
  };

 

  return (
    <div className="App">
      <div className="relative-section"></div>
      <div className="min-h-screen">
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
                  Yeni <br className="hidden md:block" />
                  HESAP OLUŞTUR{" "}
                </h1>
                <div className="FrmHesapoluTurProcess1 w-[69px] h-2 justify-start items-start gap-1 inline-flex">
                  <div className="flex justify-center items-center">
                    {formArray.map((v, i) => (
                      <React.Fragment key={i}>
                        <div
                          className={`w-[10px] my-3 text-transparent rounded-full ${
                            formNo - 1 === i ||
                            formNo - 1 === i + 1 ||
                            formNo === formArray.length
                              ? "bg-slate-400 w-[70px]"
                              : "bg-neutral-800"
                          } h-[10px] flex justify-center items-center`}
                        >
                          {v}
                        </div>
                        {i !== formArray.length - 1 && (
                          <div
                            className={`w-[5px] h-[0px] ${
                              formNo === i + 2 || formNo === formArray.length
                                ? "bg-neutral-800"
                                : "bg-slate-400"
                            }`}
                          ></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <ToastContainer />
              <div className="card w-full md:w-[400px] h-[400px] rounded-sm shadow-md bg-black p-5 text-sm">
                <div className="font-sans text-xl font-semibold text-center tracking-tight text-white sm:text-xl xl:leading-none">
                  {formBasliklari[formNo - 1]}
                </div>
                {formNo === 1 && (
                  <div>
                    <div className="flex flex-col mb-[200px]">
                      <label htmlFor="email">E-Posta</label>
                      <input
                        value={state.email}
                        onChange={inputHandle}
                        className="p-2 bg-zinc-800 border border-slate-900 mt-1 outline-0  rounded-sm"
                        type="email"
                        required
                        name="email"
                        placeholder="E-posta"
                        id="email"
                      />
                      <div className="flex items-center mt-2 mb-2">
                      <input
                        type="checkbox"
                        id="termsCheckbox"
                        name="termsCheckbox"
                        className="mr-2"
                      />
                      <label htmlFor="termsCheckbox" className="dark:text-gray-500">
                      Kabul ediyorum <a href="/" className="underline dark:text-gray-200">Kurallar & Koşullar</a> 
                      </label>
                    </div>
                    </div>
                    
                    <div className="mt-4 flex justify-center items-center">
                      <button
                        onClick={sonraki}
                        className="px-3  py-0 text-sm rounded-sm w-full text-white bg-[#3f3f46]"
                      >
                        Devam et
                      </button>
                    </div>
                  </div>
                )}

                {formNo === 2 && (
                  <div >
                    <div className="flex flex-col mb-2">
                      <label htmlFor="phone">Telefon</label>
                      <PhoneInput
                        inputProps={{
                          name: "phone",
                          required: true,
                          id: "phone",
                          placeholder: "XXX XXX XXXX",
                          className:
                            "p-2 bg-zinc-800 w-[80%] float-right	 pl-[20px]  border text-white border-slate-900 mt-1 outline-0 rounded-sm",
                        }}
                        country={"us"} // İstenilen ülke kodunu buraya ekleyin
                        value={state.phone}
                        onChange={(phone) => setState({ ...state, phone })}
                      />
                    </div>
                    <div className="mt-4 gap-3 flex justify-center items-center">
                      <button
                        onClick={onceki}
                        className="px-3 py-1 text-xs font-thin dark:text-gray-300 rounded-sm w-full  text-white bg-stone-700"
                      >
                        Önceki
                      </button>
                      <button
                        onClick={sonraki}
                        className="px-3 py-1 text-xs font-thin dark:text-gray-300 rounded-sm w-full  text-white bg-stone-700"
                      >
                        Devam et
                      </button>
                    </div>
                  </div>
                )}

                {formNo === 3 && (
                  <div>
                    <div className="flex flex-col mb-2">
                      <label htmlFor="username">Kullanıcı Adı</label>
                      <input
                        value={state.kullaniciAdi}
                        onChange={inputHandle}
                        className="p-2 bg-zinc-800 border border-slate-900 mt-1 outline-0  rounded-sm"
                        type="text"
                        name="kullaniciAdi"
                        placeholder="Kullanıcı adı"
                        id="kullaniciAdi"
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label htmlFor="password1">Şifre</label>
                      <input
                        value={state.sifre1}
                        onChange={inputHandle}
                        className="p-2 bg-zinc-800 border border-slate-900 mt-1 outline-0  rounded-sm"
                        type="password"
                        name="sifre1"
                        placeholder="Şifre"
                        id="sifre1"
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label htmlFor="password2">Şifreyi Onayla</label>
                      <input
                        value={state.sifre2}
                        onChange={inputHandle}
                        className="p-2 bg-zinc-800 border border-slate-900 mt-1 outline-0  rounded-sm"
                        type="password"
                        name="sifre2"
                        placeholder="Şifreyi onayla"
                        id="sifre2"
                      />
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="termsCheckbox"
                        name="termsCheckbox"
                        className="mr-2"
                      />
                      <label htmlFor="termsCheckbox" className="dark:text-gray-400">
                      Kabul ediyorum <a href="/" className="underline dark:text-gray-200">Kurallar & Koşullar</a> 
                      </label>
                    </div>
                    <div className="mt-4 gap-3 flex justify-center items-center">
                      <button
                        onClick={onceki}
                        className="px-3 py-1 text-xs font-thin dark:text-gray-300 rounded-sm w-full  text-white bg-stone-700"
                      >
                        Önceki
                      </button>
                      <button
                        onClick={sonSubmit}
                        className="px-3 py-1 text-xs font-thin dark:text-gray-300 rounded-sm w-full  text-white bg-stone-700"
                      >
                        Gönder
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <footer className="px-4 divide-y dark:bg-black dark:text-gray-100">
          <div className="container flex flex-col py-10 mx-auto  space-y-4 lg:flex-row">
            <div className="lg:w-1/7 mr-10">
              <img
                src="./logo.png"
                alt="Şirket Logosu"
                className="dark:text-gray-900"
              />
            </div>
            <div className="footer-navs flex  flex-cols-2 text-sm gap-x-12 gap-y-4 lg:w-2/3 sm:flex-cols-4">
              <div className="space-y-3">
                <h3 className="tracki uppercase dark:text-gray-50">KARİYER</h3>
              </div>
              <div className="space-y-3">
                <h3 className="tracki uppercase dark:text-gray-50"> HAKKINDA</h3>
              </div>
              <div className="space-y-3">
                <h3 className="uppercase dark:text-gray-50">DESTEK</h3>
              </div>
              <div className="space-y-3">
                <div className="uppercase dark:text-gray-50"> DESTEK</div>
              </div>
              <div className="space-y-3">
                <div className="uppercase dark:text-gray-50"> BİZİMLE İLETİŞİME GEÇ</div>
              </div>
              <div className="space-y-3">
                <div className="uppercase dark:text-gray-50"> Devam Et</div>
              </div>
            </div>
          </div>
          <div className="py-6 text-sm text-center dark:text-gray-400">
            <div className="flex flex-cols-2 text-sm  justify-between	">
              <div className="space-y-3 ml-3">
                <h3 className="tracki uppercase dark:text-gray-50">
                  Tüm Hakları Saklıdır @ŞirketAdı
                </h3>
              </div>
              <div className="space-y-3">
                <h3 className="tracki uppercase dark:text-gray-50">
                  Gizlilik Politikası | Hizmet Şartları | Davranış Kuralları
                </h3>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
