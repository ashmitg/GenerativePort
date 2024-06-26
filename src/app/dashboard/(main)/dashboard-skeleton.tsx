import { Fragment } from "react";
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
        <main className="flex-1 overflow-auto px-6 py-5">
          <div className="grid gap-2">
            <h1 className="text-2xl font-bold text-left">Generate New Link</h1>

            <form className="mt-2 grid gap-3">
              <div className="grid gap-3">
                <Label htmlFor="title">Title</Label>
                <Input disabled id="title" placeholder="Pitch to Ycombinator - BioAI" />
                <p className="text-sm text-gray-500">This is the title</p>
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="url">Link</Label>
                <Input disabled id="url" placeholder="https://ycombinator.com/" />
                <p className="text-sm text-gray-500">link of the website your pitching too</p>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  disabled
                  id="description"
                  placeholder="Pitch to Ycombinator for an internship position at a biotech company specializing in curing cancer"
                />
                <p className="text-sm text-gray-500">Description of the position your pitching for</p>

              </div>
              <Button disabled className="w-full sm:w-auto" type="submit">
                Generate Link
              </Button>
            </form>
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">All Links</h1>

              </div>
              <p className="text-gray-500 ">
                View and manage all your generated links.
              </p>
              <div className="mt-6 grid gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Fragment key={index}>
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
                  </Fragment>
                ))}


              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
