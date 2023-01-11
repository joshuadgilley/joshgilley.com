import Head from "next/head";
import styles from "../styles/Contact.module.css";
import React, { useState } from "react";
import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import EmailErrorAlert from "../components/common/EmailErrorAlert";

export default function Contact({endpoint}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [sent, setSent] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");
  const [emailError, setEmailError] = useState(false);

  const resetForm = () => {
    setName("");
    setMessage("");
    setEmail("");
    setSubject("");
    setButtonText("Message Sent");

    setTimeout(() => {
      setSent(false);
      setButtonText("Send Message")
    }, 3000);
  };

  const formSubmit = async (e: any) => {
    e.preventDefault();
    setButtonText("...sending");

    let data = {
      name,
      email,
      message,
      subject,
    };

    try {
      const endpointWithoutQuotes: string = endpoint.replace("\"", "")
      const res = await axios.post(endpointWithoutQuotes, data);
      console.log(res);
      setSent(true);
      setButtonText("Sent!")
      resetForm();
    } catch (error) {
      console.log(error);
      setEmailError(true);
      setButtonText("Send Message")
      setTimeout(() => {
        setEmailError(false);
      }, 3000);
    }
  };

  return (
    <>
      <Head>
        <title>Josh Gilley</title>
        <meta name="description" content="Generated by create next app" />
        <meta content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' name='viewport' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          {emailError ? <EmailErrorAlert /> : ""}
          <section className="">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-2 mt-0 text-4xl tracking-tight font-extrabold text-center text-gray-800">{"Contact Me"}</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">{"I'd love to hear from you"}</p>
                <form className="space-y-8" onSubmit={(e) => formSubmit(e)}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">{"Your Email"}</label>
                        <input 
                          type="email" 
                          id="email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " 
                          placeholder="name@gmail.com" 
                          required 
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-800 ">{"Subject"}</label>
                        <input 
                          type="text" 
                          id="subject" 
                          value={subject} 
                          onChange={(e) => setSubject(e.target.value)} 
                          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" 
                          placeholder="Let us know how we can help you" 
                          required 
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800">{"Your Message"}</label>
                        <textarea 
                          id="message" 
                          rows={6} 
                          value={message} 
                          onChange={(e) => setMessage(e.target.value)}  
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" 
                          placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="mb-3 bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">{buttonText}</button>                
                  </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { endpoint: process.env.SENDEMAIL_ENDPOINT } };
};
