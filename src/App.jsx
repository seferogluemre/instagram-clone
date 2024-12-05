import React from 'react'
import './App.css'

const InstagramLogin = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* Sol taraf - Telefon görselleri */}
        <div className="hidden lg:block relative w-[468px] h-[634px]">
          <img
            src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk"
            alt="Instagram uygulama önizlemesi"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Sağ taraf - Giriş formu */}
        <div className="w-full max-w-[350px] space-y-4">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl">Instagram</h1>
          </div>

          {/* Giriş Formu */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Telefon numarası, kullanıcı adı veya e-posta"
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded"
            />
            <input
              type="password"
              placeholder="Şifre"
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded"
            />
            <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded font-semibold">
              Giriş yap
            </button>
          </form>

          {/* Ayırıcı */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-zinc-700"></div>
            <span className="text-sm text-zinc-400">YA DA</span>
            <div className="flex-1 h-px bg-zinc-700"></div>
          </div>

          {/* Facebook ile Giriş */}
          <button className="w-full text-blue-500 flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
            </svg>
            Facebook ile Giriş Yap
          </button>

          {/* Şifremi Unuttum */}
          <div className="text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Şifreni mi unuttun?
            </a>
          </div>

          {/* Kayıt Ol Linki */}
          <div className="text-center text-sm">
            <span className="text-zinc-400">Hesabın yok mu?</span>{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Kaydol
            </a>
          </div>

          {/* Uygulama İndirme */}
          <div className="pt-4 space-y-4">
            <p className="text-center text-sm">Uygulamayı indir</p>
            <div className="flex justify-center gap-4">
              <a href="#">
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v4/yp/r/XUCupIzGmzB.png"
                  alt="Google Play'den indir"
                  className="h-10 w-32"
                />
              </a>
              <a href="#">
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v4/yf/r/BFthdeAc5KC.png"
                  alt="Microsoft'tan al"
                  className="h-10 w-32"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstagramLogin

