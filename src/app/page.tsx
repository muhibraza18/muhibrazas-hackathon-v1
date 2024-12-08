import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="w-full h-[600px]">
        <div className="bg-[#F0F2F3] h-[650px] w-[57%] ml-52 flex p-14 rounded-bl-3xl xl:ml-96">
          <div className="pt-24">
            <div className="mb-5 text-xs text-[#272343]">WELCOME TO CHAIRY</div>
            <div className="text-5xl font-bold text-[#272343]">
              <div>Best Furniture</div>
              <div>Collection For Your</div>
              <div>Interior</div>
            </div>
            <button className="bg-[#029FAE] flex text-sm text-white gap-4 w-[160px] h-[40px] items-center justify-center rounded-lg mt-10">
              Shop Now
              <Image src="/arrow.png" width={20} height={20} alt="Image" />
            </button>
          </div>
          <div>
            <Image
              src="/Chair.png"
              width={384}
              height={534}
              alt="Image"
              className="ml-14"
            />
          </div>
        </div>
      </section>

      <section>
        <div className=" w-[57%] mt-20 gap-14 ml-96 items-center xl:flex ">
          <Image
            src="/Logo1.png"
            width={85}
            height={60}
            alt="Image"
            className=""
          />
          <Image src="/Logo2.png" width={107} height={109} alt="Image" />
          <Image src="/Logo3.png" width={135} height={139} alt="Image" />
          <Image src="/Logo4.png" width={62} height={65} alt="Image" />
          <Image src="/Logo5.png" width={98} height={101} alt="Image" />
          <Image src="/Logo6.png" width={113} height={115} alt="Image" />
          <Image src="/Logo7.png" width={84} height={87} alt="Image" />
        </div>
      </section>

      <section>
        <div className="w-[67%] ml-80 h-[550px]">
          <div className="font-semibold text-3xl mb-10">Featured Products</div>
          <div className="Main-card flex gap-2">
            <div className="card cursor-pointer">
              <Image src="/card1.png" width={282} height={282} alt="Image" />
              <div className="flex gap-28 mt-4">
                <div>
                  <div className="text-[#007580]">Library Stool Chair</div>
                  <div className="font-bold">$20</div>
                </div>
                <div>
                  <Image
                    src="/Add Cart.png"
                    width={40}
                    height={35}
                    alt="Image"
                  />
                </div>
              </div>
            </div>

            <div className="card cursor-pointer">
              <Image src="/card2.png" width={282} height={282} alt="Image" />
              <div className="flex gap-28 mt-4">
                <div>
                  <div className="text-[#007580]">Library Stool Chair</div>
                  <div className="font-bold">$20</div>
                </div>
                <div>
                  <Image
                    src="/Add Cart.png"
                    width={40}
                    height={35}
                    alt="Image"
                  />
                </div>
              </div>
            </div>

            <div className="card cursor-pointer">
              <Image src="/card3.png" width={282} height={282} alt="Image" />
              <div className="flex gap-28 mt-4">
                <div>
                  <div className="text-[#007580]">Library Stool Chair</div>
                  <div className="font-bold">$20</div>
                </div>
                <div>
                  <Image
                    src="/Add Cart.png"
                    width={40}
                    height={35}
                    alt="Image"
                  />
                </div>
              </div>
            </div>

            <div className="card cursor-pointer">
              <Image src="/card4.png" width={282} height={282} alt="Image" />
              <div className="flex gap-28 mt-4">
                <div>
                  <div className="text-[#007580]">Library Stool Chair</div>
                  <div className="font-bold">$20</div>
                </div>
                <div>
                  <Image
                    src="/Add Cart.png"
                    width={40}
                    height={35}
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[67%] ml-80 h-[550px]">
          <div className="font-semibold text-3xl mb-10">Top Categories</div>
          <div className="card flex gap-3">

            <div className="relative  h-64">
              <Image src="/card5.png" alt="Wing Chair" width={394} height={394} className=" object-cover"/>
            </div>

            <div className="relative  h-64 ">
              <Image src="/card6.png" alt="Wing Chair" width={394} height={394} className=" object-cover"/>
            </div>

            <div className="relative  h-64">
              <Image src="/card7.png" alt="Wing Chair" width={394} height={394} className=" object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Parent flex gap-3 w-[67%] ml-80 h-[550px]">
          <div className="writing-mode-vertical text-2xl mt-14 [writing-mode:vertical-rl]">
            EXPLORE NEW AND POPULAR STYLES 
          </div>
          <div>
          <Image src="/card8.png" alt="Wing Chair" width={630} height={630} />
          </div>
          <div>
          <Image src="/card4.png" alt="Wing Chair" width={312} height={312} />
          <Image src="/card9.png" alt="Wing Chair" width={312} height={312} className="mt-2" />
          </div>

          <div>
          <Image src="/card1.png" alt="Wing Chair" width={312} height={312} />
          <Image src="/card1.png" alt="Wing Chair" width={312} height={312} className="mt-2" />
          </div>
        </div>
      </section>

      <section>
      <div className="w-[67%] ml-80 h-[1000px] items-center mt-48">
          <div className="font-semibold text-3xl mb-10 mt-10 text-[#272343] items-center">
          Our Products
          </div>
          <div className="Main-card flex gap-2 mt-10">
            <div className="card cursor-pointer">
              <Image src="/card1.png" width={282} height={282} alt="Image" />
              <div className="flex gap-28 mt-4">
                <div>
                  <div className="text-[#007580]">Library Stool Chair</div>
                  <div className="font-bold">$20</div>
                </div>
                <div>
                  <Image
                    src="/Add Cart.png"
                    width={40}
                    height={35}
                    alt="Image"
                  />
                </div>
              </div>
            </div>

            <div className="card cursor-pointer">
              <Image src="/card2.png" width={282} height={282} alt="Image" />
              <div className="flex gap-28 mt-4">
                <div>
                  <div className="text-[#007580]">Library Stool Chair</div>
                  <div className="font-bold">$20 <span className="line-through text-[#9A9CAA]">$39</span></div>
                </div>
                <div>
                  <Image
                    src="/Add Cart.png"
                    width={40}
                    height={35}
                    alt="Image"
                  />
                </div>
              </div>
            </div>

            <div className="card cursor-pointer">
              <Image src="/card3.png" width={282} height={282} alt="Image" />
              <div className="flex gap-28 mt-4">
                <div>
                  <div className="text-[#007580]">Library Stool Chair</div>
                  <div className="font-bold">$20</div>
                </div>
                <div>
                  <Image
                    src="/Add Cart.png"
                    width={40}
                    height={35}
                    alt="Image"
                  />
                </div>
              </div>
            </div>

            <div className="card cursor-pointer">
              <Image src="/card4.png" width={282} height={282} alt="Image" />
              <div className="flex gap-28 mt-4">
                <div>
                  <div className="text-[#007580]">Library Stool Chair</div>
                  <div className="font-bold">$20</div>
                </div>
                <div>
                  <Image
                    src="/Add Cart.png"
                    width={40}
                    height={35}
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="Main-card flex gap-2 mt-10">
            <div className="card cursor-pointer">
              <Image src="/card10.png" width={282} height={282} alt="Image" />
              <div className="flex gap-28 mt-4">
                <div>
                  <div className="text-[#007580]">Library Stool Chair</div>
                  <div className="font-bold">$20</div>
                </div>
                <div>
                  <Image
                    src="/Add Cart.png"
                    width={40}
                    height={35}
                    alt="Image"
                  />
                </div>
              </div>
            </div>

            <div className="card cursor-pointer">
              <Image src="/card9.png" width={282} height={282} alt="Image" />
              <div className="flex gap-28 mt-4">
                <div>
                  <div className="text-[#007580]">Library Stool Chair</div>
                  <div className="font-bold">$20</div>
                </div>
                <div>
                  <Image
                    src="/Add Cart.png"
                    width={40}
                    height={35}
                    alt="Image"
                  />
                </div>
              </div>
            </div>

            <div className="card cursor-pointer">
              <Image src="/card11.png" width={282} height={282} alt="Image" />
              <div className="flex gap-28 mt-4">
                <div>
                  <div className="text-[#007580]">Library Stool Chair</div>
                  <div className="font-bold">$20 <span className="line-through text-[#9A9CAA]">$39</span></div>
                </div>
                <div>
                  <Image
                    src="/Add Cart.png"
                    width={40}
                    height={35}
                    alt="Image"
                  />
                </div>
              </div>
            </div>

            <div className="card cursor-pointer">
              <Image src="/card1.png" width={282} height={282} alt="Image" />
              <div className="flex gap-28 mt-4">
                <div>
                  <div className="text-[#007580]">Library Stool Chair</div>
                  <div className="font-bold">$20</div>
                </div>
                <div>
                  <Image
                    src="/Add Cart.png"
                    width={40}
                    height={35}
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
