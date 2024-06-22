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

4. schoolName is not a function

solution was, brackets were missing
function Education({
schoolStateFn,
majorStateFn,
degreeTitlestateFn,
studyStartDateStateFn,
studyEndDateStateFn,
submitSetter,
})

5. Degree title not defined

degree title state was capital here in the prop

<Education
        schoolStateFn={setSchoolChange}
        majorStateFn={setMajorChange}
        degreeTitleStateFn={setDegreeTitleChange}
        studyStartDateStateFn={setStudyStartDateChange}
        studyEndDateStateFn={setStudyEndDateChange}
        isOngoingStateFn={setIsOngoingChange}
        submitSetter={submitEducationSetter}
      />

      was small here

      function Education({

schoolStateFn,
majorStateFn,
degreeTitleStateFn,
studyStartDateStateFn,
studyEndDateStateFn,
submitSetter,
})

6. Edit button not working

here the problem is the edit is handled in app.jsx not generalInfo.jsx

chat gpt Summary:

The edit mode functionality is managed in App.jsx through the contactStatus state.

Contact.jsx handles the form rendering and submission logic.
When the form is submitted, it updates the states in App.jsx and toggles the contactStatus via submitSetter.

The Edit button in Contact.jsx allows toggling the form back to an editable state by switching contactStatus to 'edit'.

In essence, App.jsx controls the overall state of the form, while Contact.jsx manages the form's user interface and interactions based on the state provided by App.jsx.

How the edit works

here the magic is through inclusion of pending state in app.jsx

const[contactStatus, setContact] = useState('pending');

and when the status is pending or edit you can edit component in generalInfo.jsx

{(status == 'pending' || status == 'edit') && <>
<label>Name</label>
<input key='name' type="text" value={name} required onChange={handleNameChange} />
<label>Email</label>
<input key='email' type="email" value={email} required onChange={handleEmailChange} />
<label>Phone Number</label>
<input key='phone' type="phone" value={phone} required onChange={handlePhoneChange} />

  <div>
    <button>Submit</button>
  </div>
</>}
