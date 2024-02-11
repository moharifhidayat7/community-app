import { Pencil2Icon } from "@radix-ui/react-icons";
import Topic from "@/components/topic/topic";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="py-4 flex items-center gap-2">
        <div>
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
            Discussions
          </h1>
        </div>
        <div>
          <Button size="sm" asChild>
            <Link href="/">
                <Pencil2Icon className="mr-2 h-4 w-4"/> Create new topic
            </Link>
          </Button>
        </div>
      </div>
      <div className="pb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus illo illum tempore perspiciatis culpa eveniet.
      </div>
      <div className="flex items-center justify-between pb-4">
        <div>
          {/* <span className="text-sm pr-2">
            Today popular tag:
          </span>
          <div className="inline-flex gap-1">
            <Link href="/tags/lorem">
              <Badge variant="outline">lorem</Badge>
            </Link>
            <Link href="/tags/ipsum">
              <Badge variant="outline">ipsum</Badge>
            </Link>
            <Link href="/tags/dolor">
              <Badge variant="outline">dolor</Badge>
            </Link>
            <Link href="/tags/sit">
              <Badge variant="outline">sit</Badge>
            </Link>
            <Link href="/tags/amet">
              <Badge variant="outline">amet</Badge>
            </Link>
            <Link href="/tags/lorem">
              <Badge variant="outline">lorem</Badge>
            </Link>
            <Link href="/tags/ipsum">
              <Badge variant="outline">ipsum</Badge>
            </Link>
            <Link href="/tags/dolor">
              <Badge variant="outline">dolor</Badge>
            </Link>
            <Link href="/tags/sit">
              <Badge variant="outline">sit</Badge>
            </Link>
            <Link href="/tags/amet">
              <Badge variant="outline">amet</Badge>
            </Link>
          </div> */}
          <Input type="text" placeholder="Search" />
        </div>
        <div>
          <Select value="apple">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Latest</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {[...Array(5)].map((_, i) => (
        <Topic key={i} />
      ))}
    </main>
  );
}
