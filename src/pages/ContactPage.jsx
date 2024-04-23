
function ContactPage() {

  return (<>

<div className="col-span-6 flex flex-col bg-slate-50 px-3 py-5 overflow-auto">
  <h1 className="text-3xl font-extrabold text-gray-900 flex justify-center mb-4">Contacts</h1>
  <ul role="list" className="p-6 divide-y divide-slate-200">
    <li className="flex py-4 first:pt-0 last:pb-0 relative group">
      <img className="h-10 w-10 rounded-full" src="http://dummyimage.com/147x100.png/dddddd/000000" alt="" />
      <div className="ml-3 overflow-hidden">
        <p className="text-sm font-medium text-slate-900">Jhon Doe</p>
        <p className="text-sm text-slate-500 truncate">Jhon_doe@mail.com</p>
      </div>
    </li>
  </ul>
</div>




  </>)
};

export default ContactPage;