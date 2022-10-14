import React from 'react';

const ComoFunciona = () => {
  return (
    <div
      id="comofunciona"
      className="bg-white h-screen flex flex-col font-poppins"
    >
      <div className="h-[6.5%] flex w-full shadow">
        <p className="text-[24px] font-medium ml-4 my-auto">¿Como funciona?</p>
      </div>
      <div className="w-11/12 h-[93.5%] flex flex-col justify-around m-auto ">
        <p className="text-[16px] p-5 rounded-[20px] font-light bg-lightGrey text-darkGrey">
          Conectamos Bodegas locales y su producto con el mundo, a través del
          uso de la tecnología blockchain
        </p>
        <p className="text-[16px] p-5 rounded-[20px] font-light bg-lightGrey text-darkGrey">
          Ofrecémos un producto digital bien conocido como NFT con múltiples
          beneficios que lo respaldan y le brindan gran valor, a los que podrá
          acceder efectuando la compra del mismo por medio los medios que
          pusimos a su disposición.
        </p>
      </div>
    </div>
  );
};

export default ComoFunciona;
