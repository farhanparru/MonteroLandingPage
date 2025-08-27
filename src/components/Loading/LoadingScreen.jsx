import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LoadingScreen = () => {
  return (
   <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="
        w-full h-full
        max-w-screen-2xl max-h-screen
        flex items-center justify-center
        p-4
      ">
        <div className="
          w-full h-full
          max-w-lg max-h-lg
          sm:max-w-xl sm:max-h-xl
          md:max-w-2xl md:max-h-2xl
          lg:max-w-3xl lg:max-h-3xl
          xl:max-w-4xl xl:max-h-4xl
          2xl:max-w-5xl 2xl:max-h-5xl
        ">
          <DotLottieReact
            src="https://lottie.host/58c0ce85-7f27-4b93-bf34-bf91f27b8bae/K0e3cpioVD.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;