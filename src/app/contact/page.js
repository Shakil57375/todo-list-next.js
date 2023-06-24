
const ContactPage = () => {
 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-semibold mb-4">Email</h2>
          <p className="text-lg">shakil57375@gmail.com</p>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-semibold mb-4">Phone</h2>
          <p className="text-lg">+8801814265294</p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Address</h2>
        <p className="text-lg">Barura, Comilla, Bangaldesh</p>
      </div>
      <p className="text-xl text-center">
        We appreciate your feedback and strive to provide the best user experience possible. Do not hesitate to get in touch with us!
      </p>
    </div>
  );
};

export default ContactPage;
