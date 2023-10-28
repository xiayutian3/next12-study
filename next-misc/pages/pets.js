import Image from "next/image"

// Image 对图片有优化功能 优化图片大小，懒加载，占位图

export default function Pets() {
  return (
    <div>
      {
        [1,2].map((path) =>{
          return (
            <div key={path}>
              {/* <img src={`/${path}.webp`} alt="pets" width="200" height="420" /> */}
              <Image src={`/${path}.webp`} alt="pets" width="200" height="420" />
            </div>
          )
        })
      }
    </div>
  )
}