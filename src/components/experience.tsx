import { Card } from "@/components/ui/card";

interface iData {
  description: string;
  id: string;
  link: string;
  imageurl: string;
  title: string;
}

export function Experience({ data }: { data: iData[] }) {
  console.log(data, "data");

  return (
    <div className="grid gap-6 justify-center items-center py-10 ">
      {data &&
        data.map((obj: iData, index: number) => (
          <div key={index}>
            <Card className="bg-gray-950 text-gray-50 p-6 rounded-lg shadow-lg max-w-5xl">
              <div className="grid gap-2 ">
                <div className="flex items-center justify-between">
                  <a target="_blank" href={obj?.link} rel="noopener noreferrer">
                    <h3 className="text-xl font-bold hover:underline">
                      {obj?.title}
                    </h3>
                  </a>
                </div>

                <p className="text-sm text-gray-300">{obj?.description}</p>
              </div>
            </Card>
          </div>
        ))}
    </div>
  );
}
