const Card = () => {
  return (
    <div className="m-auto mt-[154px] max-w-[846px]">
      <div className="flex bg-[#ffffff] rounded-t-[10px]">
        <div>
          <img src="./images/png/pic.png" alt="pic" />
        </div>
        <div className="mt-[30px] ml-[30px] w-[100%] max-w-[510px]">
          <p className="font-semibold text-[25px]">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="flex items-center gap-[15px] mt-[15px] mb-[30px]">
            <img src="./images/svg/stars.svg" alt="rate" />
            <p className="font-sans text-[14px] text-[gray]">126</p>
          </div>
          <p className="text-[gray]">Identifier number</p>
          <div className="flex justify-end">
            <p className="font-bold text-[#941B0C] text-[38px]">699 ₽</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-[#F2F2F2] rounded-b-[10px] min-h-[60px]">
        <div className="flex justify-center items-center gap-[15px] w-1/2 font-medium">
          <img src="images/svg/truck.svg" alt="truck" />
          <p>Order delivery</p>
        </div>
        <div className="flex justify-center items-center gap-[15px] w-1/2 font-medium">
          <img src="images/svg/shopping-bag.svg" alt="shopping-bag" />
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
