import React from 'react'
import Link from "next/link";
import { FaTimes, FaChevronDown } from "react-icons/fa";

import { useRef, useState } from "react";

const DidiNavSideBar = ({toggleSideBar}) => {

    const [show1, setShow1] = useState("false");
    const [show2, setShow2] = useState("false");
    const [show3, setShow3] = useState("false");

    const show1Subsidebar = () => {
        if (show1 == "true")
            setShow1("false");
        else
            setShow1("true");
    }
    const show2Subsidebar = () => {
        if (show2 == "true")
            setShow2("false");
        else
            setShow2("true");
    }
    const show3Subsidebar = () => {
        if (show3 == "true")
            setShow3("false");
        else
            setShow3("true");
    }
    return (
        <>
            <div className='didi-sidebar'>
                <FaTimes className='didi-sidebar-icon' onClick={() => toggleSideBar(true)}/>
                <ul className='didi-ul'>
                    <li>
                        <Link href="/">
                            <a>主頁</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/shop/fullwidth-no-sidebar"
                        >
                            <a>商店</a>
                        </Link>
                    </li>
                    <li className="position-relative">
                        <Link href="/other/about-two">
                        <a>關於我們</a>
                        </Link>
                    </li>
                    <li className="position-relative">
                        <Link href="/shop/jewls">
                        <a>珠寶/玉石</a>
                        </Link>
                    </li>
                    <li className="position-relative">
                        <span className={"sidebar-title"} onClick={show1Subsidebar}>
                            服裝飾品
                        </span>
                        <span className={"sidebarSpan"} onClick={show1Subsidebar}>
                            <FaChevronDown />
                        </span>
                        <ul className={`subsiderbar ${show1 == "false" ? "didishow" : ""}`}>
                            <li className={"sidebar-small"}>
                                <Link
                                    href="/shop/clothes?tag=男士"
                                >
                                    <a>男士</a>
                                </Link>
                            </li>
                            <li className="sidebar-small">
                                <Link
                                    href="/shop/clothes?tag=女士"
                                >
                                    <a>女士</a>
                                </Link>
                            </li>
                            <li className="sidebar-small">
                                <Link
                                    href="/shop/clothes?tag=孩童"
                                >
                                    <a>孩童</a>
                            </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="position-relative">
                        <Link href="/shop/supplies">
                            <a>日常用品</a>
                        </Link>
                    </li>
                    <li className="position-relative">
                        <Link href="/shop/foods">
                            <a>食品</a>
                        </Link>
                    </li>
                    <li className="position-relative">
                        <span className={"sidebar-title"} onClick={show2Subsidebar}>
                            房屋/車
                        </span>
                        <span className={"sidebarSpan"} onClick={show2Subsidebar}>
                            <FaChevronDown />
                        </span>
                        <ul className={`subsiderbar ${show2 == "false" ? "didishow" : ""}`}>
                            <li className="sidebar-small">
                                <Link
                                    href="/shop/house?tag=新屋"
                                >
                                    <a>新屋</a>
                                </Link>
                            </li>
                            <li className="sidebar-small">
                                <Link
                                    href="/shop/house?tag=中古屋"
                                >
                                    <a>中古屋</a>
                                </Link>
                            </li>
                            <li className="sidebar-small">
                                <Link
                                    href="/shop/house?tag=新車"
                                >
                                    <a>新車</a>
                                </Link>
                            </li>
                            <li className="sidebar-small">
                                <Link
                                    href="/shop/house?tag=中古車"
                                >
                                    <a>中古車</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="position-relative">
                        <Link href="/partner">
                            <a>合作商家</a>
                        </Link>
                    </li>
                    </ul>
            </div>
        </>
    )
}

export default DidiNavSideBar
