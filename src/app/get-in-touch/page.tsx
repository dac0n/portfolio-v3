"use client";
import React, { useState } from "react";
import { FormButton } from "@/components/form-btn/FormButton";
import { Frame } from "@/components/frame/Frame";

export default function GetInTouch() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="flex h-full w-full flex-col">
      <Frame className="items-end pb-[50px]">
        <Frame className="flex w-[521px] flex-col items-start justify-end gap-[23px] pt-[50px] text-left text-inactive">
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <label htmlFor="email" className="block uppercase text-active">
              Contact email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-formEl-outline-inactive bg-formEl-bg-inactive px-3 py-2 font-baiJamjuree text-formEl-formText-inactive"
              placeholder="Email"
              required
            />

            <label htmlFor="name" className="block uppercase text-active">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-formEl-outline-inactive bg-formEl-bg-inactive px-3 py-2 font-baiJamjuree text-formEl-formText-inactive"
              placeholder="Name"
              required
            />
            <label htmlFor="message" className="block uppercase text-active">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="hide-scrollbar w-full border border-formEl-outline-inactive bg-formEl-bg-inactive px-3 py-2 font-baiJamjuree text-formEl-formText-inactive"
              placeholder="Leave your message..."
              required
            ></textarea>
            <div className="flex w-full flex-col items-center gap-3">
              <button type="submit" disabled={status === "sending"}>
                <FormButton
                  leftCorner={{
                    cornerType: "corner",
                    invertedX: true,
                    invertedY: true,
                  }}
                  rightCorner={{ cornerType: "corner", invertedY: true }}
                  className="w-[301px]"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </FormButton>
              </button>
              {status === "success" && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500">
                  Failed to send message. Please try again.
                </p>
              )}
            </div>
          </form>
        </Frame>
      </Frame>
    </main>
  );
}
