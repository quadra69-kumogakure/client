import { useEffect, useState } from "react";
import { apiRequest } from "../utils/axios";

function ContactPage() {
  const [dataContacts, setDataContacts] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const { data } = await apiRequest({
        url: "/contacts",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      setDataContacts(data.contacts)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (<>

    <div className="col-span-4 flex flex-col bg-slate-100 px-3 py-5 overflow-auto">
      <h1 className="text-2xl font-semibold text-gray-900 flex justify-center mb-4">Contacts</h1>
      {isLoading ? (
        <p>Tunggu dulu ya...</p>
      ) : (
        <ul role="list" className="p-6 divide-y divide-slate-200 hover:bg-blue-300 hover:rounded-md hover:bg-opacity-20">
          {dataContacts.map((el) => (
            <li key={el.id} className="flex py-4 first:pt-0 last:pb-0 relative group">
              <img className="h-10 w-10 rounded-full" src={el.User.profilePicture} alt="Profile Picture" />
              <div className="ml-3 flex flex-col overflow-hidden">
                <a href="#" className="text-sm font-medium text-slate-900">{el.User.firstName}{el.User.lastName}</a>
                <a href= "#" className="text-sm text-slate-500 truncate">{el.User.email}</a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>




  </>)
};

export default ContactPage;