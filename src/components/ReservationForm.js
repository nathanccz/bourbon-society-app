import { Formik } from 'formik';

const ReservationForm = () => {
  
  const formData = {
    "reservationRoute": "/api/reservations"
  }
  
  return (
    <>
      <Formik
        initialValues = {{ email: '', name: '', tel: '', date: '', time: '', guests: '1' }}
        validate = { values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        }}
        onSubmit = {( values, { setSubmitting, resetForm } ) => {
            const form = document.getElementById("contactForm");
            const status = document.getElementById("contactFormStatus");
            const data = {};

            data['name'] = values.name;
            data['email'] = values.email;
            data['phone'] = values.tel;
            data['date'] = values.date;
            data['time'] = values.time;
            data['guests'] = values.guests;

            fetch(form.action, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response);
                if (response.ok) {
                    resetForm();
                    status.innerHTML = "Thanks for your submission! Please wait a few seconds...";
                    status.style.display = 'block';
                    form.style.display = 'none';

                    setTimeout(function(){
                      status.innerHTML = "You've reserved your spot! We can't wait to see you."
                    }, 4000);
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                        } else {
                            status.innerHTML = "Oops! There was a problem submitting your form"
                        }
                    })
                }
            }).catch(error => {
                status.innerHTML = "Oops! There was a problem submitting your form"
            });

            setSubmitting(false);
        }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit} id="contactForm" action={formData.reservationRoute}>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="kf-field">
                  <input
                    type="text" 
                    placeholder="Full Name"
                    name="name" 
                    required="required" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name} 
                  />
                  <i className="far fa-user" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="kf-field">
                  <input
                    type="email" 
                    placeholder="Email Address"
                    name="email"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <i className="fas fa-at" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="kf-field">
                  <input 
                    type="tel" 
                    name="tel" 
                    placeholder="Phone Number"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tel}
                  />
                  <i className="fas fa-mobile-alt" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="kf-field">
                  <select 
                    name="guests"
                    value={values.guests}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7">7 People</option>
                    <option value="8">8 People</option>
                    <option value="9">9 People</option>
                    <option value="10">10+ People</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="kf-field">
                  <input 
                    type="date" 
                    name="date" 
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                  />
                  <i className="far fa-calendar-alt" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="kf-field">
                  <input 
                    type="text" 
                    name="time" 
                    placeholder="Time" 
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.time}
                  />
                  <i className="far fa-clock" />{" "}
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="kf-bts">
                  <button
                    type="submit"
                    className="kf-btn"
                  >
                    <span>Make Reservation</span>
                    <i className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>

        </form>
        )}
      </Formik>
      <div className="alert-success" style={{ display: "none", textAlign: "center" }} id="contactFormStatus">
        <p>You've reserved your spot! We can't wait to see you.</p>
      </div>
    </>
  );
};
export default ReservationForm;
