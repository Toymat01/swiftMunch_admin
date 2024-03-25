'use client';
import { SWIFT_SVG } from "../../public/images/index";
import { IoIosArrowDown } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from 'react';
import { Poppins } from 'next/font/google'
import dynamic from "next/dynamic";
//import ReactApexChart from "react-apexcharts"; 
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Card, SmallCard } from "@/components/ui/card/Card";
import Review from "@/components/ui/TestimonialCard/Review";
import AnandreansyahPix from "../../public/images/Anandreansyah.png"
import JonsPix from "../../public/images/jons.png"
import SofiahPix from "../../public/images/sofia.png"
import meal from "../../public/images/meal.png"
import meal2 from "../../public/images/meal2.png"
import Header from "@/components/common/Header";
const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600"] })

export default function Home() {
  const [totalOrders, setTotalOrders] = useState({
    options: {
      legend: {
        show: false,
      },

      fill: {
        show: false,
        colors: ['#FF5B5B', '#FF5B5B26'],
        type: 'solid',
        pattern: {
          style: 'verticalLines',
          width: 40,
          height: 40,
          strokeWidth: 20,
        },
      }
    },
    series: [81, 19],
    labels: ['A', 'B']
  }
  )
  const [chart_orders, setchart_orders] = useState({
    series: [{
      name: 'series1',
      data: [31, 90, 68, 110, 42, 109, 100]
    }],
    options: {
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        type: 'category',
        categories: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
      },
      label: {
        style: {
          fontSize: '10px'
        }
      }
    }
  })
  const [chart_totalRev, setChart_totalRev] = useState()
  const [chart_customerMap, setChart_customerMap] = useState({

    series: [{
      data: [21, 22, 10, 28, 16, 21, 13]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      //colors: ["red", "blue"],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          ['Sun'],
          ['Mon'],
          ['Tue'],
          ['Wed'],
          ['Thur'],
          ['Fri'],
          ['Sat'],
        ],
        labels: {
          style: {
            fontSize: '10px'
          }
        }
      }
    },
  });
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };


  return (
    <>
      <Header username='Samathan' />
      <main className={`${poppins.className} w-[98.5%] xl:w-[95%] mx-auto mt-8 `}>
        <div className="top flex items-center justify-between">
          <div className="left">
            <h1 className=" md:text-base xl:text-2xl font-semibold text-grey3">Dashboard</h1>
            <p className="text-[#A3A3A3] md:text-[0.75rem] xl:text-sm xl:mt-1">Hi, Samantha. Welcome back  to SwiftMunch Admin!</p>
          </div>
          <div className="right flex justify-between items-center bg-white rounded-lg md:py-1 md:px-2 xl:px-4 xl:py-2.5 gap-x-3 xl:w-[25%] ">
            <div className="icon bg-[#2D9CDB26] h-10 w-10 rounded-lg flex justify-center items-center">
              {SWIFT_SVG().date()}
            </div>
            <div className="text text-grey4">
              <p className="font-medium md:text-[0.469rem] xl:text-base">Filter Period</p>
              <p className="text-[0.625rem]">17 April 2024 - 21 May 2024</p>
            </div>
            <div className="icon">
              <IoIosArrowDown size={"1.3rem"} color={"#B9BBBD"} />
            </div>
          </div>
        </div>
        <section className="cards_wrapper mt-8">
          <div className="cards_top flex justify-between gap-y-4 xl:gap-x-4 flex-wrap xl:flex-nowrap">

            <SmallCard icon={SWIFT_SVG().totalOrder()} ratio="4% (30 days)" title="Total Orders" value={75} traction="increase" />
            <SmallCard icon={SWIFT_SVG().totalDelivered()} ratio="4% (30 days)" title="Total Delivered" value={357} traction="increase" />
            <SmallCard icon={SWIFT_SVG().totalCancelled()} ratio="25% (30 days)" title="Total Cancelled" value={65} traction="decrease" />
            <SmallCard icon={SWIFT_SVG().totalRevenue()} ratio="12% (30 days)" title="Total Revenue" value={"₦128K"} traction="decrease" />
          </div>
        </section>
        <section className="flex justify-between items-center mt-6 gap-y-4 xl:gap-x-2 flex-wrap xl:flex-nowrap ">
          <div className="card_25 bg-white rounded-lg flex justify-between items-center px-6 shadow-[0px_4px_4px_0px_#0000000A] w-full xl:w-1/2 py-4 flex-col min-h-[16.5rem]">
            <div className="top flex justify-between items-center w-full text-grey3">
              <p className="text-lg font-bold">Pie Chart</p>
              <div className="flex gap-x-4 items-center">
                <div className="flex gap-x-1">
                  <input type="checkbox" name="chart" />
                  <label htmlFor="chart" className="text-[0.7rem] font-semibold">Chart</label>
                </div>
                <div className="flex gap-x-1">
                  <input type="checkbox" name="chart" />
                  <label htmlFor="chart" className="text-[0.7rem] font-semibold">Show Value</label>
                </div>
                <button className="more_options">
                  <BsThreeDotsVertical size={"1rem"} color={"#A3A3A3"} style={{ fontWeight: "900" }} />
                </button>
              </div>
            </div>
            <div className="charts flex justify-between items-center w-full mt-4 text-grey3 font-bold text-sm">
              <div className="chart flex flex-col w-2/6 items-center">
                <div className="chart">

                  <ReactApexChart
                    options={{
                      legend: {
                        show: false,
                      },
                      fill: {
                        colors: ['#FF5B5B', '#FF5B5B26'],
                        type: 'solid',
                        pattern: {
                          style: 'verticalLines',
                          width: 40,
                          height: 40,
                          strokeWidth: 20,
                        },
                      }
                    }}
                    series={[55, 15]}
                    type="donut"
                    width={"210"}
                  />
                </div>
                <p className="text-[0.7rem]">Total Order</p>
              </div>
              <div className="chart flex flex-col w-2/6 items-center">
                <div className="chart">

                  <ReactApexChart
                    options={{
                      legend: {
                        show: false,
                      },
                      fill: {
                        colors: ['#00B074', '#00B07426'],
                        type: 'solid',
                        pattern: {
                          style: 'verticalLines',
                          width: 40,
                          height: 40,
                          strokeWidth: 20,
                        },
                      }
                    }}
                    series={[15, 55]}
                    type="donut"
                    width={"210"}
                  />
                </div>
                <p className="text-[0.7rem]">Customer Growth</p>
              </div>
              <div className="chart flex flex-col w-2/6 items-center">
                <div className="chart">
                  <ReactApexChart
                    options={{
                      legend: {
                        show: false,
                      },
                      fill: {
                        colors: ['#2D9CDB26', '#2D9CDB'],
                        type: 'solid',
                        pattern: {
                          style: 'verticalLines',
                          width: 40,
                          height: 40,
                          strokeWidth: 20,
                        },
                      }
                    }}
                    series={[36, 64]}
                    type="donut"
                    width={"210"}
                  />
                </div>
                <p className="text-[0.7rem]">Total Revenue</p>
              </div>
            </div>
          </div>
          <Card width="w-full xl:w-1/2 hidden">
            <div className="top flex justify-between items-center w-full text-grey3 px-6 " >
              <div>
                <p className="text-lg font-bold">Chart Order</p>
                <p className="text-[0.72rem] text-[#B9BBBD]">Lorem ipsum dolor sit amet, consectetur adip</p>
              </div>
              <div className="flex gap-x-4 items-center">

                <button className="more_options flex items-center border border-[#2D9CDB] rounded-lg px-2 py-1 text-[0.7rem] font-semibold text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white" >
                  <RiDownloadLine /> <span>Save Report</span>
                </button>
              </div>
            </div>
            <div className="charts flex justify-between items-center w-full mt-4 text-grey3 font-bold text-sm px-2">
              <div className="chart w-full">
                
                {/*  <ReactApexChart options={{
                  legend: {
                    show: false,
                  },
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    curve: 'smooth',
                    width: 2,
                  },
                  yaxis: {
                    show: false,
                  },
                  xaxis: {
                    type: 'category',
                    categories: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
                  }
                }} series={chart_orders.series} type="area" height={"175"} /> */}
              </div>
            </div>
          </Card>
        </section>
        <section className="justify-between items-center mt-6 gap-x-4 hidden" >
          <Card width="w-full md:w-[55%] xl:w-[65%]">
            <div className="top flex justify-between items-center w-full text-grey3 px-6">
              <div>
                <p className="text-lg font-bold">Total Revenue</p>
              </div>
              <div className="flex gap-x-4 items-center">

                <button className="more_options flex items-center border border-[#2D9CDB] rounded-lg px-2 py-1 text-[0.7rem] font-semibold text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white" >
                  <RiDownloadLine /> <span>Save Report</span>
                </button>
              </div>
            </div>
            <div className="charts flex justify-between items-center w-full mt-4 text-grey3 font-bold text-sm px-2">
              <div className="chart w-full">
                {/* <ReactApexChart options={{
                  legend: {
                    show: false,
                  },
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    curve: 'smooth',
                    width: 2,
                  },
                  yaxis: {
                    show: false,
                  },
                  xaxis: {
                    type: 'category',
                    categories: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
                  }
                }} series={chart_orders.series} type="area" height={275} /> */}
              </div>
            </div>
          </Card>

          <Card width="w-full md:w-[45%] xl:w-[35%]">
            <div className="top flex justify-between items-center w-full text-grey3 px-6">
              <div>
                <p className="text-lg font-bold">Customer Map</p>
              </div>
              <div className="flex gap-x-4 items-center">

                <button className="more_options flex items-center border border-[#2D9CDB] rounded-lg px-2 py-1 text-[0.7rem] font-semibold text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white" >
                  <RiDownloadLine /> <span>Weekly</span>
                </button>
              </div>
            </div>
            <div className="charts flex justify-between items-center w-full mt-4 text-grey3 font-bold text-sm px-2">
              <div className="chart w-full">

                {/* <ReactApexChart options={{
                  chart: {
                    height: 350,
                    type: 'bar',
                  },
                  colors: ["red", "blue"],
                  plotOptions: {
                    bar: {
                      columnWidth: '45%',
                      distributed: true,
                    }
                  },
                  dataLabels: {
                    enabled: false
                  },
                  legend: {
                    show: false
                  },
                  xaxis: {
                    categories: [
                      ['Sun'],
                      ['Mon'],
                      ['Tue'],
                      ['Wed'],
                      ['Thur'],
                      ['Fri'],
                      ['Sat'],
                    ],
                    labels: {
                      style: {
                        fontSize: '10px'
                      }
                    }
                  }
                }} series={chart_customerMap.series} type="bar" height={275} /> */}
              </div>
            </div>
          </Card>
        </section >
        <section className="testimonial mt-8 mb-8">
          <div className="title">
            <h1 className="md:text-base xl:text-2xl font-semibold text-grey3">Customer Review</h1>
            <p className="text-[#A3A3A3] md:text-[0.75rem] xl:text-sm mt-1 font-bold">Eum fuga consequuntur utadsjn et.</p>
          </div>
          <div className="testimonies_container flex justify-between items-center mt-6">

            <Review
              profile_pixs={JonsPix}
              time="2 days ago"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text "
              user_name="Jons Sena"
              mealImg={meal}
              rate={4.5}
              style=" w-[46%] xl:w-[30%] "
            />
            <Review
              profile_pixs={SofiahPix}
              time="2 days ago"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text "
              user_name="Jons Sena"
              mealImg={meal2}
              rate={4.0}
              style=" w-[46%] xl:w-[30%] "
            />
            <Review
              profile_pixs={AnandreansyahPix}
              time="2 days ago"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text "
              user_name="Jons Sena"
              mealImg={meal}
              rate={4.5}
              style="hidden xl:flex w-[46%] xl:w-[30%]"
            />
          </div>

        </section>
      </main >
    </>
  );
}



/* babawalequadri2019@gmail.com, oyeshiletosin17@gmail.com, samuelfamakinwa973@gmail.com, awasiu001@gmail.com, mattykaykay405@gmail.com, auwalgarbaabubakar95@gmail.com, oziomaonyero98@gmail.com, Abdulrahmanmuhammad00123@gmail.com, charlieaigbovbiosa03@gmail.com, ademolaayomide019@gmail.com, quadrioriyomi5050@gmail.com, bukarharuna@gmail.com, dalrexxy@gmail.com, godwinpraise05@gmail.com, Desmondchideraexcel@gmail.com, mariacynny@gmail.com, austinaikhomu1@gmail.com, ajayiaustine5@gmail.com, dennisayuba114@gmail.com, Vonnecrux@gmail.com, checkoutmd@gmail.com, sofiyulahiakanbi@gmail.com,adeoludavid1@gmail.com,dosucasmil93@gmail.com,peterchukwuemekaeneteh1977@gmail.com,iadamu461@gmail.com,ademolaayomide019@gmail.com,datalinkscomputer@gmail.com,chimdindusmart@gmail.com,vjmeribe@gmail.com
,chimdindusmart@gmail.com,greg.ethel@gmail.com,christiannzebunachi@gmail.com
*/





