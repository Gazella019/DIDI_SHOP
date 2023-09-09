import React from 'react'
import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";
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
                        <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                            <a>主頁</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/shop/fullwidth-no-sidebar"
                            as={process.env.PUBLIC_URL + "/shop/fullwidth-no-sidebar"}
                        >
                            <a>商店</a>
                        </Link>
                    </li>
                    <li className="position-relative">
                        <Link href="/other/about-two" as={process.env.PUBLIC_URL + "/"}>
                        <a>關於我們</a>
                        </Link>
                    </li>
                    <li className="position-relative">
                        <Link href="/shop/jewls" as={process.env.PUBLIC_URL + "/"}>
                        <a>珠寶/玉石</a>
                        </Link>
                    </li>
                    <li className="position-relative">
                        <Link href="/shop/clothes" as={process.env.PUBLIC_URL + "/"}>
                            <a>服裝飾品</a>
                        </Link>
                        <span className={"sidebarSpan"} onClick={show1Subsidebar}>+</span>
                        <ul className={`subsiderbar ${show1 == "false" ? "didishow" : ""}`}>
                            <li className={"sidebar-small"}>
                                <Link
                                    href="/shop/clothes"
                                    as={process.env.PUBLIC_URL + "/other/about"}
                                >
                                    <a>男士</a>
                                </Link>
                            </li>
                            <li className="sidebar-small">
                                <Link
                                    href="/shop/clothes"
                                    as={process.env.PUBLIC_URL + "/other/about-two"}
                                >
                                    <a>女士</a>
                                </Link>
                            </li>
                            <li className="sidebar-small">
                                <Link
                                    href="/shop/clothes"
                                    as={process.env.PUBLIC_URL + "/other/about-two"}
                                >
                                    <a>孩童</a>
                            </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="position-relative">
                        <Link href="/shop/supplies" as={process.env.PUBLIC_URL + "/"}>
                            <a>日常用品</a>
                        </Link>
                    </li>
                    <li className="position-relative">
                        <Link href="/shop/foods" as={process.env.PUBLIC_URL + "/"}>
                            <a>食品</a>
                        </Link>
                    </li>
                    <li className="position-relative">
                        <Link href="/shop/house" as={process.env.PUBLIC_URL + "/"}>
                            <a>房屋/車</a>
                        </Link>
                        <span className={"sidebarSpan"} onClick={show2Subsidebar}>+</span>
                        <ul className={`subsiderbar ${show2 == "false" ? "didishow" : ""}`}>
                            <li className="sidebar-small">
                                <Link
                                    href="/shop/house"
                                    as={process.env.PUBLIC_URL + "/other/about"}
                                >
                                    <a>新屋</a>
                                </Link>
                            </li>
                            <li className="sidebar-small">
                                <Link
                                    href="/shop/house"
                                    as={process.env.PUBLIC_URL + "/other/about-two"}
                                >
                                    <a>中古屋</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="position-relative">
                        <Link href="/shop/partners" as={process.env.PUBLIC_URL + "/"}>
                            <a>合作商家</a>
                        </Link>
                        <span className={"sidebarSpan"} onClick={show3Subsidebar}>+</span>
                            <ul className={`subsiderbar ${show3 == "false" ? "didishow" : ""}`}>
                                <li className="sidebar-small">
                                    <Link
                                        href="/shop/partners"
                                        as={process.env.PUBLIC_URL + "/other/about"}
                                    >
                                        <a>傑泰玻璃</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
            </div>
        </>
    )
}

export default DidiNavSideBar
