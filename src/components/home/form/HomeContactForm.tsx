import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function HomeContactForm() {
    return (
        <div>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input className="bg-white border-none" placeholder="Name" />
                    <Input className="bg-white border-none" type="email" placeholder="Email" />
                    <Select>
                        <SelectTrigger className="bg-white border-none">
                            <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="math">Mathematics</SelectItem>
                            <SelectItem value="science">Science</SelectItem>
                            <SelectItem value="history">History</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input className="bg-white border-none" placeholder="Class" />
                    <Input className="bg-white border-none" type="number" placeholder="Age" />
                    <Select>
                        <SelectTrigger className="bg-white border-none">
                            <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="w-full col-span-2 bg-[#4caf50] hover:bg-[#45a049] text-white">Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default HomeContactForm
