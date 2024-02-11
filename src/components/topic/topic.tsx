
import Link from "next/link";
import { Badge } from "@/components/ui/badge"

export default function Topic() {
	return (
		<div className="mb-2">
			<div className="flex flex-col p-4 gap-2 bg-slate-100 dark:bg-zinc-900 rounded-md">
				<div className="flex justify-between items-center">
					<div className="font-medium text-lg">
						<Link href="/">
							lorem ipsum dolor sit amet
						</Link>
					</div>
					<div className="font-lignt text-sm text-zinc-500">
						1 hour ago
					</div>
				</div>
				<div className="py-1 text-gray-800 dark:text-zinc-400">
					<p className="text-sm">
						lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</div>
				<div className="flex justify-between items-center">
					<div className="flex gap-1">
						<Link href="/tags/lorem">
							<Badge>lorem</Badge>
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
						<Link href="/tags/amet">
							<Badge variant="outline">...</Badge>
						</Link>
					</div>
					<div>
						<Link href="/tags/lorem" className="flex items-center gap-2">
							<div>
								<svg width="15" height="15" viewBox="0 0 15 15" fill="purple" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
							</div>
							<div className="text-sm font-lignt">2</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}