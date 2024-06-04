'use client';


import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string;
  
}


export const Activelink = ({path, text}:Props) => {

  const pathname = usePathname()

  return (
    <Link key={path} href={path} className={`${style.link} ${ (pathname === path) && style['active-link']} `} >
      {text}</Link>
  )
}
