import { useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);

  const first = <div className="relative">
    <img className="w-full h-full object-cover"
      src="https://bangmim.github.io/pmh/img/joy.JPG" alt="joy" />
    <h2 style={{fontFamily: 'Jua'}} className="absolute w-full top-4 left-0 text-gray-600 p-2 text-xl font-semibold bg-white/70 ">즐겁게 일하는</h2>
  </div>
  const second = <div className="relative">
    <img className="w-full h-full object-cover"
      src="https://bangmim.github.io/pmh/img/communication.JPG" alt="communication" />
      
    <h2 style={{fontFamily: 'Jua'}} className="absolute w-full text-right top-4 right-0 text-gray-600 bg-white/70 p-2 font-semibold text-xl ">소통할 줄 아는</h2>
     
  </div>

  const third = <div className="relative">
    <img className="w-full h-full object-cover"
      src="https://bangmim.github.io/pmh/img/exercise1.jpg" alt="exercise" />
    <h2 style={{fontFamily: 'Jua'}} className="absolute w-full text-center bottom-4 left-0 text-gray-600 bg-white/70 p-2 font-semibold text-xl ">자기 계발에 적극적인</h2>
  </div>

  const images = [first, second, third];

  return (
    <div className="py-auto">
      {/* 프로필-모바일 */}
      <div className="profile md:hidden">
        <div className="w-32 h-32 border mt-20 shrink-0 mx-auto rounded-full overflow-hidden ">
          <img src="https://bangmim.github.io/pmh/img/pmh.jpg" alt="박미현"/>
        </div>
        <p className="text-2xl mt-4 text-center">PARKMIHYUN</p>
        <p className="text-xl text-blue-400 text-center">frontend Developer</p>
        <br></br>
      </div>
      {/* carousel */}
      <div className=" overflow-x-hidden relative ">
        {/* image */}
        <ul
          className="flex transition"
          style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((image,i) => (
            <li key={i} className="w-full h-full shrink-0">
              {image}
            </li>
          ))}
        </ul>
        {/* 다음 버튼 >> 화살표 */}
        <div className="absolute top-0 left-0 h-full flex items-center ">
          <button
            className={"bg-white px-2 " + (index === 0 && "hidden")}
            onClick={() => setIndex(index - 1)}>
            &#10094;
          </button>
        </div>
        <div className="absolute top-0 right-0 h-full flex items-center ">
          <button
            className={"bg-white px-2 " + (index === images.length - 1 && "hidden")}
            onClick={() => setIndex(index + 1)}>
            &#10095;
          </button>
        </div>


        {/* Indicator */}
        <ul className="absolute bottom-0 w-full py-2 flex justify-center gap-1">
          {images.map((image, dot) => (
            <li
              key={dot}
              className={"w-2 h-2 rounded-full " + (dot === index ? "bg-gray-900" : "bg-blue-300/[0.5]")}>
            </li>
          ))}
        </ul>
      </div>
      <br></br>
      {/* 프로필-웹 */}
      <div style={{fontFamily: 'Black Han Sans'}} className="profile hidden md:block">
        <p  className="text-3xl text-blue-400 text-center">신입 프론트엔드 개발자</p>
      <p className="text-4xl text-center">박미현 입니다</p>
      </div>
    </div>
  )
}