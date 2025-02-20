'use client';
import Swal from 'sweetalert2'

function Contact() {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "52800534-fd69-4fb4-8fdd-7f717ea6f320");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            Swal.fire({
                title: "Success!",
                text: "Message Sent!",
                icon: "success"
              });

            form.reset();
        }
    }
    
    return (
        <section id="contact" className="flex flex-col items-center justify-center w-full h-[32rem] font-sans mb-20">
            <div className="w-[600px] h-[550px] border border-white bg-gray-200 rounded-3xl">
                <form onSubmit={handleSubmit} className="p-5" >
                    <h2 className="font-bold text-[35px] text-black text-center">Contact Me</h2>
                    <div className="text-[15px] text-black block text-center">You can email edmondhL004@gmail.com or through this form</div>
                    <div>
                        <label className="text-[20px] text-black mt-3 block">Full Name</label>
                        <input type="text" className="border text-black border-black w-full p-2 rounded-md" placeholder="Enter Name" name='name' required />
                    </div>
                    <div>
                        <label className="text-[20px] text-black mt-3 block">Email</label>
                        <input type="email" className="border border-black text-black w-full p-2 rounded-md" placeholder="Enter Email" name='email' required />
                    </div>
                    <div>
                        <label className="text-[20px] text-black mt-3 block"> Your Message</label>
                        <textarea className="border border-black resize-none text-black p-2 w-full text-[15px] h-[150px] rounded-lg" placeholder="Enter Text" name='message' required></textarea>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button type="submit" className="text-[25px] p-1  bg-blue-500 w-full text-white rounded-md hover:bg-blue-600">Send Form</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact