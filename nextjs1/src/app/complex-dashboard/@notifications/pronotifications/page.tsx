import Card from "@/components/card";
import Link from "next/link";

export default function ProNotification(){
    return(
        <Card>
            <h1>Pro Notification</h1>
            <Link href="/complex-dashboard"className="underline text-blue-400">Notifiation</Link>
        </Card>
    )
}