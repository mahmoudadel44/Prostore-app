import { APP_NAME } from "@/lib/constants";

export default async function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full border-t">
        <div className="wrapper flex-center p-5">
            <span>© {currentYear} {APP_NAME}. All rights reserved.</span>
        </div>
        </footer>
    );
    }