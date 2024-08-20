import Card from "@/components/card";
import Link from "next/link";

export default function Notification(){
    return(
        <Card>
            <h2>Notifications</h2>
            <Link href="complex-dashboard/pronotifications" className="underline text-blue-400">pronotification</Link>
        </Card>
    )
}
