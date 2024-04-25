import { useEffect, useState } from "react"
import { apiRequest } from "../utils/axios"
import ContactDetail from "../components/ContactDetail"

function ContactPage() {
  const [dataContacts, setDataContacts] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [currentContact, setCurrentContact] = useState({})
  const [currentContactId, setCurrentContactId] = useState()

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

  const fetchDetail = async () => {
    try {
      if(currentContactId) {
        const {data} = await apiRequest({
          url: `/contacts/${currentContactId}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        setCurrentContact(data.contact)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleContact = (contactId) => {
    setCurrentContactId(contactId)
  }

  const handleClick = (contactId) => {
    handleContact(contactId);
  };

  const handleDeleteContact = async (contactId) => {
    try {
      await apiRequest({
        url: `/contacts/${contactId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      const updatedContacts = dataContacts.filter((contact) => contact.friend.id !== contactId)
      setDataContacts(updatedContacts)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchDetail()
  }, [currentContactId])


  return (<>

    <div className="col-span-4 flex flex-col bg-slate-100 px-3 py-5 overflow-auto">
      <h1 className="text-2xl font-semibold text-gray-900 flex justify-center mb-4">Contacts</h1>
      {isLoading ? (
        <p>Tunggu dulu ya...</p>
      ) : (
        <ul role="list" className="p-6 divide-y divide-slate-200">
          {dataContacts.map((el) => (
            <div key={el.id} onClick={() => handleClick(el.id)} className="flex py-4 first:pt-0 last:pb-0 relative group hover:cursor-pointer">
              <img className="h-10 w-10 rounded-full" src={el.friend.profilePicture} alt="Profile Picture" />
              <div className="ml-3 flex flex-col overflow-hidden">
                <p href="#" className="text-sm font-medium text-slate-900">{`${el.friend.firstName} ${el.friend.lastName}`}</p>
                <p href= "#" className="text-sm text-slate-500 truncate">{el.friend.email}</p>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
    <div className="col-span-5 flex flex-col bg-slate-50 px-3 py-5 overflow-auto">
    <ContactDetail contact={currentContact} contactId={currentContactId} onDelete={handleDeleteContact} />
    </div>
  </>)
};

export default ContactPage;