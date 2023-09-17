import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"

function App() {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    name: '',
    dept: '',
    batch: '',
    varsity: '',
    session: '',
    address: '',
    district: '',
    thana: '',
    post: ''
  });

  const formTitles = ['E-Posta Adresi Gir', 'Telefon Numaranı Ekle', 'Step 3: Address Info'];

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const next = () => {
    if (formNo === 1 && state.name && state.dept && state.batch) {
      setFormNo(formNo + 1);
    } else if (formNo === 2 && state.varsity && state.session && state.address) {
      setFormNo(formNo + 1);
    } else {
      toast.error('Please fill up all input fields');
    }
  };

  const pre = () => {
    setFormNo(formNo - 1);
  };

  const finalSubmit = () => {
    if (state.district && state.thana && state.post) {
      toast.success('Form submit success');
    } else {
      toast.error('Please fill up all input fields');
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div className="flex flex-col items-center justify-between xl:flex-row sjsjsj">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
                  Yeni <br className="hidden md:block" />
                  HESAP OLUŞTUR{" "}
                </h1>
                <div className="FrmHesapoluTurProcess1 w-[69px] h-2 justify-start items-start gap-1 inline-flex">
                  <div className="flex justify-center items-center">
                    {formArray.map((v, i) => (
                      <>
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
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <ToastContainer />
      <div className="card w-[500px] h-[400px] rounded-md shadow-md bg-black p-5 text-sm">
      <div className=" font-sans text-sm font-semibold	 text-center	 tracking-tight text-white sm:text-sm sm:leading-none">
                  {formTitles[formNo - 1]}
                </div>
                {
          formNo === 1 && <div>
            <div className='flex flex-col mb-2' >
              <label htmlFor="name" className="text-[#D9D9D9]">Name</label>
              <input value={state.name} onChange={inputHandle} className='p-2 border bg-stone-700 text-sm	 border-slate-900 mt-1 outline-0  rounded-md' type="text" name='name' placeholder='name' id='name' />
            </div>
            
            <div className='mt-4 flex justify-center items-center'>
              <button onClick={next} className='px-3 py-1 text-lg rounded-md w-full text-white bg-stone-700'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 2 && <div>
            <div className='flex flex-col mb-2'>
              <label className='text-[#D9D9D9]' htmlFor="varsity">Varsity</label>
              <input value={state.varsity} onChange={inputHandle} className='p-2 border bg-stone-700 text-sm	 border-slate-900 mt-1 outline-0 text-slate-500  rounded-md' type="text" name='varsity' placeholder='varsity name' id='varsity' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-[#D9D9D9]' htmlFor="session">session</label>
              <input value={state.session} onChange={inputHandle} className='p-2 border bg-stone-700 text-sm	 border-slate-900 mt-1 outline-0 text-slate-500  rounded-md' type="text" name='session' placeholder='session' id='session' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-[#D9D9D9]' htmlFor="address">Address</label>
              <textarea value={state.address} onChange={inputHandle} row='10' className='p-2 border bg-stone-700 text-sm	 border-slate-900 mt-1 outline-0 text-slate-500  rounded-md' type="number" name='address' placeholder='address' ></textarea>
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-stone-700'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-stone-700'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 3 && <div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="district" className="text-[#D9D9D9]">District</label>
              <input value={state.district} onChange={inputHandle} className='p-2 border bg-stone-700 text-sm	 border-slate-900 mt-1 outline-0  rounded-md' type="text" name='district' placeholder='district name' id='district' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="thana" className="text-[#D9D9D9]">Thana</label>
              <input value={state.thana} onChange={inputHandle} className='p-2 border bg-stone-700 text-sm	 border-slate-900 mt-1 outline-0  rounded-md' type="text" name='thana' placeholder='thana' id='thana' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="post" className="text-[#D9D9D9]">Post</label>
              <input value={state.post} onChange={inputHandle} className='p-2 border bg-stone-700 text-sm	 border-slate-900 mt-1 outline-0  rounded-md' type="text" name='post' placeholder='post' id='post' />
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-stone-700'>Previous</button>
              <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-stone-700'>Submit</button>
            </div>
          </div>
        }

      </div>
    </div>
          </div>
          <footer className="px-4 divide-y dark:bg-black dark:text-gray-100">
            <div className="container flex flex-col py-10 mx-auto  space-y-4 lg:flex-row">
              <div className="lg:w-1/7 mr-10">
                <img
                  src="./logo.png"
                  alt="Company Logo"
                  className="dark:text-gray-900"
                />
              </div>
              <div className="footer-navs flex  flex-cols-2 text-sm gap-x-12 gap-y-4 lg:w-2/3 sm:flex-cols-4">
                <div className="space-y-3">
                  <h3 className="tracki uppercase dark:text-gray-50">
                    CAREERS
                  </h3>
                </div>
                <div className="space-y-3">
                  <h3 className="tracki uppercase dark:text-gray-50"> ABOUT</h3>
                </div>
                <div className="space-y-3">
                  <h3 className="uppercase dark:text-gray-50">SUPPORT</h3>
                </div>
                <div className="space-y-3">
                  <div className="uppercase dark:text-gray-50"> SUPPORT</div>
                </div>
                <div className="space-y-3">
                  <div className="uppercase dark:text-gray-50"> CONTACT US</div>
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
                    All Rights Reserved @CompanyName
                  </h3>
                </div>
                <div className="space-y-3">
                  <h3 className="tracki uppercase dark:text-gray-50">
                    {" "}
                    Privacy Policy | Terms of Services | Code of Conduct{" "}
                  </h3>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
