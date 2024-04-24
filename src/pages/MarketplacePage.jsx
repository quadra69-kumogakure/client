import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "../utils/axios";

function MarketplacePage() {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const { id } = useParams();
    //   console.log(id,'<<<<<');
  
    async function fetchData() {
      try {
        const { data } = await apiRequest({
          url: `/stickers`,
        });
        // console.log(data,'<<<<<');
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      fetchData();
    }, []);
  
    const [input, setInput] = useState({
      title: "",
      stickerId: 0,
    });
  
    const handleInput = (event) => {
      const { name, value } = event.target;
      setInput({
        ...input,
        [name]: value,
      });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        input.stickerId=id
        const { data } = await apiRequest({
          method: "post",
          url: `/stickers/${id}`,
          headers: {
            Authorization: "Bearer " + localStorage.access_token,
          },
          data: input,
        });
        // console.log(data.transactionToken,'<<<<<<<<<<<<<');
        window.snap.pay(data.transactionToken, {
          onSuccess: async function(result){
            /* You may add your own implementation here */
            console.log(result);
            await apiRequest({
              method: "post",
              url: '/payment',
              data: {
                bookingId: data.bookingId
              },
              headers: {
                Authorization: "Bearer " + localStorage.accessToken,
              },
            })
          }
        });
  
        // navigate("/booking/list");
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: error.response.data.message,
          icon: "error",
        });
      }
    };

    return (
        <>
        </>
    )
};

export default MarketplacePage;