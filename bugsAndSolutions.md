1. Rendering submit
   you need div with render and terenary operator with submit

{submitted ? <p>Form Submitted!</p> : null}{" "}
{/\_

<p>Full Name: {fullname}</p>_/}
<p>Email: {email}</p>
<p>Phone: {phone}</p>
<p>Address: {address}</p>
</div>

2. Unable to submit

first you need use state setter  
const [submitted, setSubmitted] = useState(false); // State to track if
//Event handler
form is submitted
const submitSetter = () => {
// Update state to indicate form submission
setSubmitted(true);
};
//submit setter in general info

/_There is a bug here as well, it should be fullNameStateFn_/
<GeneralInfo

        nameStateFn={setFullNameChange}
        emailStateFn={setEmailChange}
        phoneStateFn={setPhoneChange}
        addressStateFn={setAddressChange}
        submitSetter={submitSetter}
      />

3. Submit setter error
   you need a submitSetter prop and cal it
   function GeneralInfo({
   fullNameStateFn,
   emailStateFn,
   phoneStateFn,
   addressStateFn,
   submitSetter,
   })

   //call it here
   const handleSubmit = (e) => {
   e.preventDefault();
   fullNameStateFn(fullname);
   emailStateFn(email);
   phoneStateFn(phone);
   addressStateFn(address);
   submitSetter();
   };
