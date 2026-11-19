
import { useState, type FormEvent } from "react";
import {
    ArrowUpRight,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

type EnquiryFormData = {
    studentName: string;
    guardianName: string;
    phone: string;
    email: string;
    stream: string;
    message: string;
};

const initialData: EnquiryFormData = {
    studentName: "",
    guardianName: "",
    phone: "",
    email: "",
    stream: "",
    message: "",
};

function EnquiryForm() {
    const [form, setForm] = useState<EnquiryFormData>(initialData);
    const [consent, setConsent] = useState(false);
    const [status, setStatus] = useState<"idle" | "demo">("idle");

    function updateField(
        field: keyof EnquiryFormData,
        value: string
    ) {
        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));

        setStatus("idle");
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Development-only validation.
        // No personal information is transmitted or stored.
        if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
            return;
        }

        if (!consent) return;

        setStatus("demo");
    }

    const inputClass =
        "w-full rounded-xl border border-regency-ink/15 bg-white px-4 py-3.5 text-regency-ink outline-none transition-all focus:border-regency-burgundy focus:ring-2 focus:ring-regency-burgundy/10";

    const labelClass =
        "block text-sm font-medium text-regency-ink mb-2";

    return (
        <div className="w-full">
            <div className="mb-9">
                <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-4">
                    Admission Enquiry
                </p>

                <h3 className="font-heading text-3xl md:text-4xl text-regency-burgundy">
                    Begin your journey with Regency.
                </h3>

                <p className="text-regency-ink/65 leading-7 mt-4">
                    Share your details and interests using the form below.
                </p>
            </div>

            <div
                role="note"
                className="mb-7 rounded-xl border border-regency-gold/40 bg-regency-cream p-4 text-sm text-regency-ink/80"
            >
                Form preview only. Enquiries are not being sent yet.
                Please do not enter real personal information while testing.
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="studentName" className={labelClass}>
                            Student Name *
                        </label>

                        <input
                            id="studentName"
                            required
                            maxLength={100}
                            className={inputClass}
                            value={form.studentName}
                            onChange={(event) =>
                                updateField("studentName", event.target.value)
                            }
                            placeholder="Enter student's name"
                        />
                    </div>

                    <div>
                        <label htmlFor="guardianName" className={labelClass}>
                            Parent / Guardian Name *
                        </label>

                        <input
                            id="guardianName"
                            required
                            maxLength={100}
                            className={inputClass}
                            value={form.guardianName}
                            onChange={(event) =>
                                updateField("guardianName", event.target.value)
                            }
                            placeholder="Enter guardian's name"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="phone" className={labelClass}>
                            Mobile Number *
                        </label>

                        <input
                            id="phone"
                            type="tel"
                            inputMode="numeric"
                            required
                            pattern="[6-9][0-9]{9}"
                            title="Enter a valid 10-digit Indian mobile number"
                            maxLength={10}
                            className={inputClass}
                            value={form.phone}
                            onChange={(event) =>
                                updateField("phone", event.target.value)
                            }
                            placeholder="10-digit mobile number"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className={labelClass}>
                            Email Address *
                        </label>

                        <input
                            id="email"
                            type="email"
                            required
                            maxLength={254}
                            className={inputClass}
                            value={form.email}
                            onChange={(event) =>
                                updateField("email", event.target.value)
                            }
                            placeholder="example@email.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="stream" className={labelClass}>
                        Preferred Stream *
                    </label>

                    <select
                        id="stream"
                        required
                        className={inputClass}
                        value={form.stream}
                        onChange={(event) =>
                            updateField("stream", event.target.value)
                        }
                    >
                        <option value="">Select a stream</option>
                        <option value="Science">Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Undecided">Not decided yet</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className={labelClass}>
                        Your Message (Optional)
                    </label>

                    <textarea
                        id="message"
                        rows={4}
                        maxLength={1000}
                        className={inputClass}
                        value={form.message}
                        onChange={(event) =>
                            updateField("message", event.target.value)
                        }
                        placeholder="What would you like to know?"
                    />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        required
                        checked={consent}
                        onChange={(event) => {
                            setConsent(event.target.checked);
                            setStatus("idle");
                        }}
                        className="mt-1 accent-regency-burgundy"
                    />

                    <span className="text-sm text-regency-ink/70 leading-6">
            I agree to be contacted by Regency PU College
            regarding my admission enquiry.
          </span>
                </label>

                {status === "demo" && (
                    <div
                        role="status"
                        className="flex items-start gap-3 rounded-xl bg-regency-cream p-4"
                    >
                        <CheckCircle2
                            size={20}
                            className="text-regency-burgundy shrink-0"
                        />

                        <p className="text-sm text-regency-ink">
                            Form validation passed! This is a development
                            preview. No enquiry has been sent.
                        </p>
                    </div>
                )}

                <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-regency-burgundy px-8 py-4 text-white font-semibold transition-colors hover:bg-regency-rose"
                >
                    Test Enquiry Form
                    <ArrowUpRight size={18} />
                </button>

                <p className="flex items-center gap-2 text-xs text-regency-ink/50">
                    <AlertCircle size={14} />
                    Email delivery will be enabled after secure backend setup.
                </p>

            </form>
        </div>
    );
}

export default EnquiryForm;
