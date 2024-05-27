import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Label } from "@/components/ui/label";
import { CardHeader, CardContent, Card } from "@/components/ui/card";

export function DashboardSkeleton() {
  return (
    <div className="grid min-h-screen w-full">
      <div className="flex flex-col">
        <main className="flex-1 overflow-auto px-6 py-8">
          <div className="grid gap-8">
            <div>
              <h1 className="text-2xl font-bold">Generate New Link</h1>
              <p className="text-gray-500 ">
                Create a new link to share with your team or customers.
              </p>
              <form className="mt-6 grid gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter a title for your link" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="url">URL</Label>
                  <Input id="url" placeholder="Enter the URL" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter a description for your link"
                  />
                </div>
                <Button className="w-full sm:w-auto" type="submit">
                  Generate Link
                </Button>
              </form>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">All Links</h1>

              </div>
              <p className="text-gray-500 ">
                View and manage all your generated links.
              </p>
              <div className="mt-6 grid gap-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <Skeleton className="h-5 w-40" />
                        <Skeleton className="h-4 w-32 mt-2" />
                      </div>
                      <div className="flex gap-2">
                        <Skeleton className="h-8 w-8" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <Skeleton className="h-5 w-40" />
                        <Skeleton className="h-4 w-32 mt-2" />
                      </div>
                      <div className="flex gap-2">
                        <Skeleton className="h-8 w-8" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <Skeleton className="h-5 w-40" />
                        <Skeleton className="h-4 w-32 mt-2" />
                      </div>
                      <div className="flex gap-2">
                        <Skeleton className="h-8 w-8" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
