import Image from 'next/image'
import styles from './page.module.css'
import os from 'os'; // 노드 APIs

export default function Home() {
  console.log("안녕!");
  console.log(os.hostname());
  return <h1>홈페이지다!!</h1>
}
