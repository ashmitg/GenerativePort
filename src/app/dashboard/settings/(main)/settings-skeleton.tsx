
import { Button } from "@/components/ui/button";

export function SettingsSkeleton() {
  return (
    <div className="flex flex-col min-h-screen px-4 py-5 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold  text-gray-900">College</h2>
            <div className="mt-2 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 w-32 rounded-md bg-gray-200 " />
                  <div className="h-3 w-48 rounded-md bg-gray-200 " />
                </div>
                <div className="flex items-center space-x-2">
                  <Button disabled size="sm" variant="ghost">
                    <LinkIcon className="h-4 w-4" />
                    <span className="sr-only">Open Project</span>
                  </Button>
                  <Button disabled size="sm" variant="ghost">
                    <DeleteIcon className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button disabled size="sm" variant="ghost">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 w-32 rounded-md bg-gray-200 " />
                  <div className="h-3 w-48 rounded-md bg-gray-200 " />
                </div>
                <div className="flex items-center space-x-2">
                  <Button disabled size="sm" variant="ghost">
                    <LinkIcon className="h-4 w-4" />
                    <span className="sr-only">Open Project</span>
                  </Button>
                  <Button disabled size="sm" variant="ghost">
                    <DeleteIcon className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button disabled size="sm" variant="ghost">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
              <Button disabled size="sm" variant="outline">
                Add Project
              </Button>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Awards</h2>
            <div className="mt-2 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 w-24 rounded-md bg-gray-200 " />
                  <div className="h-3 w-32 rounded-md bg-gray-200 " />
                </div>
                <div className="flex items-center space-x-2">
                  <Button disabled size="sm" variant="ghost">
                    <DeleteIcon className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button disabled size="sm" variant="ghost">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 w-24 rounded-md bg-gray-200 " />
                  <div className="h-3 w-32 rounded-md bg-gray-200 " />
                </div>
                <div className="flex items-center space-x-2">
                  <Button disabled size="sm" variant="ghost">
                    <DeleteIcon className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button disabled size="sm" variant="ghost">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
              <Button disabled size="sm" variant="outline">
                Add Skill
              </Button>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold font-bold text-gray-900">Skills</h2>
            <div className="mt-2 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 w-32 rounded-md bg-gray-200 " />
                  <div className="h-3 w-48 rounded-md bg-gray-200 " />
                </div>
                <div className="flex items-center space-x-2">
                  <Button disabled size="sm" variant="ghost">
                    <DeleteIcon className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button disabled size="sm" variant="ghost">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 w-32 rounded-md bg-gray-200 " />
                  <div className="h-3 w-48 rounded-md bg-gray-200 " />
                </div>
                <div className="flex items-center space-x-2">
                  <Button disabled size="sm" variant="ghost">
                    <DeleteIcon className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button disabled size="sm" variant="ghost">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
              <Button disabled size="sm" variant="outline">
                Add Award
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold  text-gray-900">Experiences</h2>
            <div className="mt-2 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 w-32 rounded-md bg-gray-200 " />
                  <div className="h-3 w-48 rounded-md bg-gray-200 " />
                </div>
                <div className="flex items-center space-x-2">
                  <Button disabled size="sm" variant="ghost">
                    <DeleteIcon className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button disabled size="sm" variant="ghost">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
              <Button disabled size="sm" variant="outline">
                Add College
              </Button>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold  text-gray-900">Projects</h2>
            <div className="mt-2 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 w-32 rounded-md bg-gray-200 " />
                  <div className="h-3 w-48 rounded-md bg-gray-200 " />
                </div>
                <div className="flex items-center space-x-2">
                  <Button disabled size="sm" variant="ghost">
                    <DeleteIcon className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button disabled size="sm" variant="ghost">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 w-32 rounded-md bg-gray-200 " />
                  <div className="h-3 w-48 rounded-md bg-gray-200 " />
                </div>
                <div className="flex items-center space-x-2">
                  <Button disabled size="sm" variant="ghost">
                    <DeleteIcon className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button disabled size="sm" variant="ghost">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
              <Button disabled size="sm" variant="outline">
                Add Experience
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm   ">
            <h2 className="text-lg font-bold text-gray-900 ">Profile</h2>
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 w-full rounded-md bg-gray-200 " />
                  <div className="h-4 w-full rounded-md bg-gray-200 " />
                </div>
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 w-full rounded-md bg-gray-200 " />
                  <div className="h-4 w-full rounded-md bg-gray-200 " />
                </div>
              </div>
              <div className="space-y-2 animate-pulse">
                <div className="h-4 w-full rounded-md bg-gray-200 " />
                <div className="h-12 w-full rounded-md bg-gray-200 " />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 ">Socials</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 animate-pulse">
                      <div className="h-4 w-full rounded-md bg-gray-200 " />
                      <div className="h-4 w-full rounded-md bg-gray-200 " />
                    </div>
                    <Button disabled size="sm" variant="ghost">
                      <DownloadIcon className="h-4 w-4" />
                      <span className="sr-only">Download Resume</span>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 animate-pulse">
                      <div className="h-4 w-full rounded-md bg-gray-200 " />
                      <div className="h-4 w-full rounded-md bg-gray-200 " />
                    </div>
                    <Button disabled size="sm" variant="ghost">
                      <DownloadIcon className="h-4 w-4" />
                      <span className="sr-only">Download CV</span>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 animate-pulse">
                      <div className="h-4 w-full rounded-md bg-gray-200 " />
                      <div className="h-4 w-full rounded-md bg-gray-200 " />
                    </div>
                    <Button disabled size="sm" variant="ghost">
                      <LinkIcon className="h-4 w-4" />
                      <span className="sr-only">LinkedIn Profile</span>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 animate-pulse">
                      <div className="h-4 w-full rounded-md bg-gray-200 " />
                      <div className="h-4 w-full rounded-md bg-gray-200 " />
                    </div>
                    <Button disabled size="sm" variant="ghost">
                      <LinkIcon className="h-4 w-4" />
                      <span className="sr-only">GitHub Profile</span>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 animate-pulse">
                      <div className="h-4 w-full rounded-md bg-gray-200 " />
                      <div className="h-4 w-full rounded-md bg-gray-200 " />
                    </div>
                    <Button disabled size="sm" variant="ghost">
                      <LinkIcon className="h-4 w-4" />
                      <span className="sr-only">Twitter Profile</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Button className="w-full mr-2" disabled>
              Save Changes
            </Button>
            <Button className="w-full" disabled variant="outline">
              See Public Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeleteIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function DownloadIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function LinkIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function TrashIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
