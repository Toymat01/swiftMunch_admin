"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { PendingButtonOutline, PrimaryButton, PrimaryOutlineButton, SuccessButtonOutline } from "@/components/ui/Buttons/Button";
import { OrderCard, OrderSmallCard } from '@/components/ui/card/Card';
import { StaticImageData } from 'next/image';
import { BiCheck, BiX } from 'react-icons/bi';
import userImg from "../../../../public/images/profile_pixs.png"
import { toast } from 'react-toastify';
import CardModal from '@/components/ui/Modal/Modal';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Spinner } from '@/components/ui/Spinner/Spinner';
import Table from '@/components/table/table';
import TableRow from '@/components/table/tablebody';
import { BsThreeDotsVertical } from 'react-icons/bs';
import moment from 'moment';

type Props = {}

type Order = {
  brand_order_status: string,
  created_at: string,
  menuitem_image: string | StaticImport,
  menuitems_name: string | null,
  userPixs: StaticImageData,
  order_no: string,
  id: number,
  order_status: string,
  quantity: number,
  rider_order_status: string | number,
  total_amount: number,
  user: {
    first_name:string,
    last_name:string,
    user_image?:null
  }
}
type ordersType = {
  total_user_orders: number,
  pending_orders: number,
  cancelled_orders: number,
  delivered_orders: number,
  orders: Order[]
}
type ridersType = {
  email: string,
  first_name: string,
  id: number,
  last_name: string,
  phone_number: number
  status: string
}
interface LoadingState {
  [key: number]: boolean;
}

const ordersHeader = [
  "Order ID", "Users", "Created On", "Total Amount", "Status", "Action"
]
export default function Index({ }: Props) {
  const router = useRouter()
  const [isAllOrders, setIsAllOrders] = useState<"yes" | "no">("no");
  const [orders, setOrders] = useState<ordersType | null>({} as ordersType);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<LoadingState>({});
  const [ridersAvailable, setRidersAvailable] = useState([])
  const [acceptOrderLoading, setAcceptOrderLoading] = useState<LoadingState>({});
  const [cancelOrderLoading, setCancelOrderLoading] = useState<LoadingState>({});
  const [assigning_rider, setAssigning_rider] = useState(false);
  const [ridersModalShow, setRiderModalShow] = useState(false);
  const [riderEmail, setRiderEmail] = useState("");
  const [orderID_to_assign_rider, set_orderID_to_assign_rider] = useState<number>({} as number);
  const [OrderModalShow, setOrderModalShow] = useState(false);


  const fetchAllOrders = useCallback(() => {
    let token = localStorage.getItem("token")?.replace(/^"|"$/g, '');
    setIsLoading(true)
    switch (isAllOrders) {
      case "yes":
        fetch('https://swiftmunch.onrender.com/orders/admin-all-orders/', {
          headers: {
            "content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          method: "GET"
        })
          .then((res) => res.json())
          .then((data) => {
            
            setOrders(data)
            setIsLoading(false)
          }).catch(err => {
            if (err?.status == 401) {
              router.push("/login")
            }
            setOrders(null)
            toast.error("An Error Occurred");
          })
        break;
      case "no":
        fetch('https://swiftmunch.onrender.com/orders/admin-daily-orders/', {
          headers: {
            "content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          method: "GET"
        })
          .then((res) => res.json())
          .then((data) => {
            setOrders(data)
            setIsLoading(false)
          }).catch(err => {
            if (err?.status == 401) {
              router.push("/login")
            }
            setOrders(null)
            toast.error("An Error Occurred");
          })
      default:
        break;
    }
  }, [isAllOrders, router])
  useEffect(() => {
    //let token = localStorage.getItem("token")?.replace(/^"|"$/g, '');
    fetchAllOrders();

  }, [isAllOrders, fetchAllOrders])

  const handleOrderType = (ordersType: string) => {
    if (ordersType == "yes") {
      setIsAllOrders("yes");
    }
    else {
      setIsAllOrders("no");
    }
  }

  const acceptOrder = (id: number) => {
    let token = localStorage.getItem("token")?.replace(/^"|"$/g, '');
    setAcceptOrderLoading((prevState => ({
      ...prevState,
      [id]: true
    })));
    fetch(`https://swiftmunch.onrender.com/orders/update-order-status/${id}/`, {
      headers: {
        "content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      method: "PUT",
      body: JSON.stringify({
        "order_status": "Accepted"
      })
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message)
        setAcceptOrderLoading((prevState => ({
          ...prevState,
          [id]: false
        })));
        fetchAllOrders();
      }).catch(err => {
        if (err?.status == 401) {
          router.push("/login")
        }
        console.log(err);

        toast.error("An Error Occurred");
      });
  }
  const cancelOrder = (id: number) => {
    let token = localStorage.getItem("token")?.replace(/^"|"$/g, '');
    setCancelOrderLoading((prevState => ({
      ...prevState,
      [id]: true
    })));

    fetch(`https://swiftmunch.onrender.com/orders/update-order-status/${id}/`, {
      headers: {
        "content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      method: "PUT",
      body: JSON.stringify({
        "order_status": "Cancelled"
      })
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message)
        
        setCancelOrderLoading((prevState => ({
          ...prevState,
          [id]: false
        })));
        fetchAllOrders();
      }).catch(err => {
        if (err?.status == 401) {
          router.push("/login")
        }
        console.log(err);

        toast.error("An Error Occurred");
      });
  }

  useEffect(() => {
    let token = localStorage.getItem("token")?.replace(/^"|"$/g, '');
    const fetchRidersAvailable = () => {
      fetch(`https://swiftmunch.onrender.com/riders/`, {
        headers: {
          "content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setRidersAvailable(data);
          //setIsOrderStatusLoading(false)
        }).catch(err => {
          if (err?.status == 401) {
            router.push("/login")
          }
          console.log(err);

          toast.error("An Error Occurred");
        })
    }

    fetchRidersAvailable();
  }, [router]);

  const toggleDropdown = (itemId: number) => {
    setIsDropdownOpen(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  }

  const closeModal = (type: string) => {

    switch (type) {
      case "orderModal":
        setOrderModalShow(false)
        break;
      case "ridersModal":
        setRiderModalShow(false)
        break;
      default:
        break;
    }

  }

  const assign_order_a_rider = (rider_email: string) => {
    let token = localStorage.getItem("token")?.replace(/^"|"$/g, '');
    setAssigning_rider(true)
    fetch(`https://swiftmunch.onrender.com/orders/assigned-rider/${orderID_to_assign_rider}/`, {
      headers: {
        "content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        "assigned_rider": rider_email
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setRiderModalShow(false)
        setAssigning_rider(false)
        fetchAllOrders()
      }).catch(err => {
        if (err?.status == 401) {
          router.push("/login")
        }
        console.log(err);
        setAssigning_rider(false)
        toast.error("An Error Occurred");

      })


  }

  const assign_a_rider = (order_id: number) => {
    setRiderModalShow(true)
    set_orderID_to_assign_rider(order_id)
  }


  return (
    <>
      {/* SWITCHING FROM ALL ORDERS TO DAILY ORDERS BUTTONS */}
      <section className="flex justify-between items-center mt-8">
        {
          isAllOrders == "yes" ?
            <>
              <PrimaryOutlineButton content="Daily Orders" handleClick={() => handleOrderType("no")} isOutline={"no"} />
              <PrimaryButton content="All Orders" handleClick={() => handleOrderType("yes")} isOutline={"yes"} />

            </> :
            <>
              <PrimaryButton content="Daily Orders" handleClick={() => handleOrderType("no")} isOutline={"yes"} />
              <PrimaryOutlineButton content="All Orders" handleClick={() => handleOrderType("yes")} isOutline={"no"} />


            </>
        }

      </section>
      {
        isLoading
          ?
          <Spinner size='w-8 h-8 mt-10' color='text-primary' />
          : isAllOrders !== "yes"
            ?
            <>
              {
                orders !== null
                  ? orders?.orders?.length > 0
                    ?
                    <>
                      {/* SUMMARY CARD */}
                      <div className="summary_Cards flex items-center justify-between flex-wrap xl:flex-nowrap gap-y-4 lg:w-full mt-8">
                        <OrderSmallCard width="w-full md:w-[30%] xl:w-[27%]" title="Pending Orders" value={orders.pending_orders} />
                        <OrderSmallCard width="w-full md:w-[30%] xl:w-[27%]" title="Cancelled Orders" value={orders.cancelled_orders} />
                        <OrderSmallCard width="w-full md:w-[30%] xl:w-[27%]" title="Delivered Orders" value={orders.delivered_orders} />
                      </div>
                      <section className="orders flex justify-between items-center gap-x-4 md:gap-x-2 gap-y-4 my-10 flex-wrap">
                        {orders?.orders?.length > 0 && orders?.orders?.map((order: Order) => {
                          switch (order?.order_status) {
                            case "Cancelled":
                              return <OrderCard
                                order_id={order.id}
                                key={order.order_no}
                                menuitems_name={order.menuitems_name}

                                date={order.created_at}
                                width="w-full md:w-[49%]"
                                userPixs={userImg}
                                button={<>
                                  <PrimaryOutlineButton content={"Cancelled"} />
                                </>}
                                qty={order?.quantity}
                                total_amount={order.total_amount}
                                menuitem_image={order.menuitem_image} />
                              break;
                            case "Accepted":
                              return <OrderCard
                                order_id={order.id}
                                key={order.order_no}
                                date={order.created_at}
                                menuitem_image={order.menuitem_image}
                                menuitems_name={order.menuitems_name}
                                width="w-full md:w-[49%]"
                                userPixs={userImg}
                                button={<>
                                  <SuccessButtonOutline content="Accepted" icon={<BiCheck size={"1.5rem"} />} />
                                  <PrimaryButton content="Assign a rider" handleClick={() => assign_a_rider(order.id)} />
                                </>}
                                qty={order?.quantity}
                                total_amount={order.total_amount}
                              />
                              break;
                            case "Pending":
                              return <OrderCard
                                order_id={order.id}
                                key={order.order_no}
                                menuitems_name={order.menuitems_name}
                                date={order.created_at}
                                menuitem_image={order.menuitem_image}
                                width="w-full md:w-[49%]"
                                userPixs={userImg}
                                button={<>
                                  <PendingButtonOutline content={"Pending"} />
                                </>}
                                qty={order?.quantity}
                                total_amount={order.total_amount}
                              />
                              break;
                            case "Unchosen":
                              return <OrderCard
                                order_id={order.id}
                                key={order.order_no}
                                menuitem_image={order?.menuitem_image}
                                menuitems_name={order.menuitems_name}
                                date={order.created_at}
                                width="w-full md:w-[49%]"
                                userPixs={userImg}
                                button={<>
                                  <button className={`flex items-center border border-[#E81C4E] rounded-lg px-5 py-1.5 text-[0.8rem] font-semibold text-[#E81C4E] hover:bg-[#E81C4E] hover:text-white min-w-30`} onClick={() => cancelOrder(order.id)} disabled={acceptOrderLoading[order.id] || cancelOrderLoading[order.id] ? true : false} >
                                    {cancelOrderLoading[order.id] ? <Spinner color='text-primary' /> : <BiX size={"1.2rem"} />}
                                  </button>


                                  <button className='flex items-center border rounded-lg px-5 py-1.5 text-[0.8rem] font-semibold text-success hover:bg-success hover:text-white min-w-30 border-success' onClick={() => acceptOrder(order.id)} disabled={acceptOrderLoading[order.id] || cancelOrderLoading[order.id] ? true : false}>
                                    {acceptOrderLoading[order.id] ? <Spinner color='text-primary' /> : <BiCheck size={"1.2rem"} />}
                                  </button>

                                  {/*   
                            <SuccessButtonOutline handleClick={() => changeOrderStatus("Accepted", order.id)} icon={<BiCheck size={"1.2rem"} />} />
                             <PrimaryOutlineButton handleClick={() => changeOrderStatus("Cancelled", order.id)} icon={<BiX size={"1.3rem"} />} />
                            */}
                                </>}
                                qty={order?.quantity}
                                total_amount={order.total_amount}
                              />
                              break;

                            default:
                              break;
                          }

                        })
                        }
                      </section>
                    </>
                    : <p className='mt-5'>Oopps.... No Order has been Made Today!</p>
                  : <p>An Error Occurred</p>
              }
            </>
            : orders !== null
              ? orders?.orders?.length > 0
                ?
                <div className='my-10'>
                  <Table tableHeader={ordersHeader}>
                    {orders?.orders?.map(order => {
                      return <TableRow key={order?.id}>
                        <td className="px-6 py-4 text-[#4F5871B8] text-center" >{order?.id}</td>
                        <td className="px-6 py-4 text-[#4F5871B8] text-center" >{order?.user.last_name} {order?.user.first_name}</td>
                        <td className="px-6 py-4 text-[#4F5871B8] text-center" >{moment(order?.created_at).format('lll')}</td>
                        <td className="px-6 py-4 text-[#4F5871B8] text-center" >{order?.total_amount}</td>
                        <td className="px-6 py-4 text-[#4F5871B8] text-center" >
                          <span
                            className={`py-1 px-[0.625rem] rounded-3xl font-medium ${order?.order_status == "Pending" ? "text-[#FF9900] bg-[#FFF7E6] " : order?.order_status == "Cancelled" ? "text-[#EB2828] bg-[#F2EAEA] " : order.order_status == "Unchosen" ? "text-[#32A659] bg-[#F0F4F2]" : order.order_status == "Delivered" ? "text-[#32A659] bg-[#F0F4F2]" : ""}`}>
                            {order?.order_status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-[#4F5871B8] relative text-center" >
                          <>
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button" onClick={() => toggleDropdown(order?.id)}>
                              <BsThreeDotsVertical />
                            </button>


                            <div id="dropdown" className={`z-10 ${isDropdownOpen[order?.id] ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 absolute left-0`}>
                              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                  <a href={`/orders/${order?.id}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left">Info</a>
                                </li>
                              </ul>
                            </div>
                          </>


                        </td>
                      </TableRow>
                    })}
                  </Table>
                </div>

                : <p className='mt-5'>Oopps.... No record of Orders available!</p>
              : <p>An Error Occurred</p>
      }


      {/* MODAL TO DISPLAY FOR ASSIGNER RIDER TO AN ORDER */}
      <CardModal extraClass='w-[35%] mb-10' show={ridersModalShow} handleModalClose={() => closeModal("ridersModal")}>
        <>
          <h2 className='text-center text-primary font-bold'>Assign a rider</h2>
          <div className="w-full mx-auto">

            <select defaultValue={"null"} id="riders" className="bg-gray-50 border border-[#D1D1D1] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 active:border-gray-600" onChange={(e) => setRiderEmail(e.target.value)}>

              <option value={"null"}>Choose a Rider</option>
              {ridersAvailable?.map((rider: ridersType) => {
                return <option key={rider.id} value={rider.email}>{rider.first_name} {rider.last_name}</option>
              })}
            </select>
          </div>
          <button className={`flex items-center border bg-primary text-white hover:bg-[#E81C4E] rounded-lg px-5 py-4 text-[0.8rem] font-semibold min-w-30 justify-center`} onClick={() => assign_order_a_rider(riderEmail)} disabled={assigning_rider ? true : false} >
            {assigning_rider ? <Spinner color='text-white' /> : "Send Notification"}
          </button>
        </>

      </CardModal>
      {/* MODAL TO DISPLAY AFTER ACCEPTING AN ORDER */}
      <CardModal extraClass='w-[35%] mb-10' show={OrderModalShow} handleModalClose={() => closeModal("orderModal")}>
        <>
          <h2 className='text-center text-primary font-bold'>Assign a rider</h2>
          <div className="w-full mx-auto">

            <select defaultValue={"null"} id="riders" className="bg-gray-50 border border-[#D1D1D1] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 active:border-gray-600">

              <option value={"null"}>Choose a Rider</option>
              {ridersAvailable?.map((rider: ridersType) => {
                return <option key={rider.id} value={rider.email}>{rider.first_name} {rider.last_name}</option>
              })}
            </select>
          </div>
          <PrimaryButton content="Send Notification" extraclassName="py-4 flex justify-center" isOutline='yes' />
        </>

      </CardModal>
    </>
  )
}





{/* 
  return <OrderCard
                      key={order.order_no}
                      order_id={order.order_no}
                      date={order.created_at}
                      width="w-full md:w-[49%]"
                      userPixs={userImg}
                      qty={order?.quantity}
                      total_amount={order.total_amount}
                      button={
                        <>
                          <SuccessButtonOutline content="Accepted" icon={<BiCheck size={"1.5rem"} />} />
                          <PrimaryButton content="Assign a rider" />
                        </>
                      }
                    />
      {
        orders.map((order: any) => {
          return <OrderCard
            key={order.order_no}
            order_id={order.order_no}
            date={moment(order.created_at).format('lll')}
            width="w-full md:w-[49%]"
            userPixs={orderPixs}
            button={<>
              <PrimaryOutlineButton icon={<BiX size={"1.3rem"} />} />
              <SuccessButtonOutline icon={<BiCheck size={"1.2rem"} />} />
            </>}
            qty={order.quantity == "" ? 0 : order.quantity}
            total_amount={order.total_amount}
          />

        })
      }
      */}
