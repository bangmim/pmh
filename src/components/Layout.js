import { Link, Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <div className="max-w-md mx-auto pt-14 py-6 md:max-w-5xl ">
            {/* 모바일 */}
            <nav style={{backgroundImage: `url('https://bangmim.github.io/pmh/img/bgg.jpg')`}} className="fixed top-0 left-0 w-full border-b z-10  md:hidden">
                <ul className="flex">
                    <li className="hover:font-bold">
                        <Link to="/" className="block p-2 text-xl">Home</Link>
                    </li>
                    <li className="hover:font-bold">
                        <Link to="/about" className="block p-2 text-xl">About</Link>
                    </li>
                    <li className="hover:font-bold">
                        <Link to="/project" className="block p-2 text-xl">Project</Link>
                    </li>

                </ul>
            </nav>


            {/* 웹페이지 */}
            <nav  style={{backgroundImage: `url('https://bangmim.github.io/pmh/img/bgg.jpg')`}} className="hidden md:block fixed top-0 left-0 bottom-0 w-1/4 border-r bg-white z-10 ">
           
                <div className=" w-40 h-40 border mt-20 shrink-0 mx-auto rounded-full overflow-hidden">
                    <img src="https://bangmim.github.io/pmh/img/pmh.jpg" alt="박미현사진" />
                </div>
                <p className="text-2xl mt-4 text-center ">PARKMIHYUN</p>
                <p className="text-xl text-blue-500  text-center">Frontend Developer</p>

                <ul className="block mt-10 text-center">
                    <li className="hover:font-bold">
                        <Link to="/" className="block p-2 text-xl">Home</Link>
                    </li>
                    <li className="hover:font-bold">
                        <Link to="/about" className="block p-2 text-xl">About</Link>
                    </li>
                    <li className="hover:font-bold">
                        <Link to="/project" className="block p-2 text-xl">Project</Link>
                    </li>

                </ul>
            </nav>


            <div className="mx-4 md:ml-72 mr-10">
                <Outlet />
            </div>
        </div>
          )

}