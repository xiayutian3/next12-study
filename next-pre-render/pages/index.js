import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>next 预渲染</h1>
      <Link href="/users">用户列表</Link>
      <br></br>
      <Link href="/posts">帖子列表</Link>
    </>
  );
}
