import ClientComponentOne from "@/components/client-component-one";
import ServerComponentOne from "@/components/server-component-one";

export default function Interleavin(){
    return (
        <div>
            <h1>Interleavin</h1>
            <p>This is an example of interleavin content</p>
            <ClientComponentOne>
                <ServerComponentOne />
            </ClientComponentOne>
        </div>
    )
}