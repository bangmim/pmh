import { useState } from "react"

export default function About() {
    const [active, setActive] = useState(false);

    const style = {
        html: {
            maxHeight: active ? "100px" : "0",
            transition: "0.2s",
        }
    }

    return (

        <div className="pb-10 pt-4">
            <p className="text-xl">
                안녕하십니까?

            </p>
            <p className="text-xl">신입 프론트엔드 개발자 <sm className="font-bold">박미현</sm>입니다.</p>
            <br></br>
            <p>31살 늦은 나이지만 제가 하는 일이 사회에 선한 영향력을 미치길 바라는 마음으로 항상 최선을 다하고 있습니다.</p>
            <p>그동안은 보육교사로서 사명감을 가지고 영유아가 행복한 아이로 배우고 성장할 수 있도록 일했습니다.</p>
            <br></br>
            <p>이제는 제가 개발하게 될 서비스를 통해
                <br></br>
                <sm className="font-semibold text-lg">다양한 사람들이 좀 더 편리하게, </sm>
                <br></br>
                <sm className="font-semibold text-lg">모두 공평하게, </sm>
                <br></br>
                <sm className="font-semibold text-lg">이롭게 </sm>
                될 수 있다면,
                <br></br>
                개발자로서 기쁜 마음으로 사명감을 가지고 일할 수 있을 것입니다.</p>
            <br></br>
            <p> {'['}코리아IT아카데미학원{']'}에 다니며 프론트엔드 개발자 과정으로 개발 공부를 시작했습니다.</p>
            <br></br>
            <p>현재 저는 이것을 활용하여 페이지 구현을 할 수 있습니다.
                <br></br>
                <p className="mt-2 text-lg font-semibold"> &#x1F4CC; HTML5/CSS</p>

                <p className="my-2 text-lg font-semibold">&#x1F4CC; javaScript</p>

                <p className="mb-2 text-lg font-semibold">&#x1F4CC; React</p>
                추가로
                <sm className="font-semibold"> DBMS, PYTHON, C++, JAVA 등</sm>의 언어를 배워 백엔드 서버와 관련된 부분 및 용어도 관심 있게 볼 수 있습니다.
            </p>
            <br></br>

            <p>항상 적극적인 자세와 긍정적인 마음으로 배우려고 하고, <br></br>동료의 조언을 들으려고 하고, <br></br> 새로 알게 된 것들을 해보려고 하는 준비가 되어있습니다.</p>
            <br></br>
            <p style={{ fontFamily: 'Jua' }} className="text-xl">지나간 시간은 되돌릴 수 없기에 <br></br>제게 주어진 일에  최대한 실수하지 않고,<br></br> 후회하지 않도록  최선을 다하겠습니다.</p>
        </div>

    )
}