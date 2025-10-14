import { Card, CardContent } from "../components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"
import { Button } from "../components/ui/button"
import { Hook1 } from "../Hooks/Hook1"
import { IconCloudDemo } from "../components/ui/IconCloudDemo"

export default function Portfolio() {
  const { data, cubes } = Hook1("Abraham10VelGlez")
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 flex flex-col items-center">
      {/* Sección superior */}
      <div className="flex justify-between items-center w-full max-w-1xl mb-12">
        <h1 className="text-4xl font-bold">@{data?.login || "loading..."}</h1>
        <Avatar className="w-24 h-24 border-4 border-indigo-500">
          <AvatarImage src={data?.avatar_url} alt={data?.login} />
          <AvatarFallback>AVG</AvatarFallback>
        </Avatar>
      </div>

      <div className="w-full max-w-7xl mb-16">

        <Card className="bg-gray-800 border-gray-700 hover:border-indigo-500 transition text-center">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-1 gap-4">
              <p className="text-sm mb-3 text-gray-300">
                I'm Abraham, a 30-year-old men from Toluca, Mexico. I'm currently pursuing Cambridge examinations in high school while simultaneously undertaking multiple computer science diplomas and architecture courses. My interests span across Full-Stack programming, AI development, Graphic in 3D Design. You can explore my projects and portfolio on my website:
              </p>
              <Button asChild variant="outline">
                <a href="https://github.com/Abraham10VelGlez" target="_blank">Ver en GitHub</a>
              </Button>
            </div>
          </CardContent>
        </Card>


      </div>


      {/* Estadísticas tipo GitHub */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6  max-w-5xl mb-16">
        {cubes.map((stat) => (
          <Card key={stat.id} className="bg-gray-800 border-gray-700 hover:border-indigo-500 transition">
            <CardContent className="text-center py-6">
              <h2 className="text-xl font-semibold">{stat.title}</h2>
              {/* stat.gitprop  */}
              <p className="text-3xl font-bold mt-2">
                {data
                  ? stat.gitprop
                    ? data[stat.gitprop] ?? "0"
                    : "0"
                  : "loading..."}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Herramientas / Tecnologías */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-1 max-w-2xl mb-16">
        <Card className="bg-gray-800 border-gray-700 hover:border-indigo-500 transition text-center">
          <CardContent className="py-1">
            <IconCloudDemo></IconCloudDemo>
            <p className="text-lg font-semibold">Technologies</p>
          </CardContent>
        </Card>

      </div>

      {/* Lista de proyectos */}
      <div className="w-full max-w-3xl mb-16">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Github Status</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-gray-700 hover:bg-gray-600 transition">
                <CardContent className="p-4">
                  <center>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs?username=Abraham10VelGlez&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false&order=2"
                      width={"500"}
                      height="150"
                      alt="languages graph"
                    />
                  </center>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 hover:bg-gray-600 transition">
                <CardContent className="p-4">
                  <center>
                    <img src="https://github-readme-stats.vercel.app/api?username=Abraham10VelGlez&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false&order=1"
                      width={"500"}
                      height="150"
                      alt="stats graph" />
                  </center>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 hover:bg-gray-600 transition">
                <CardContent className="p-4">
                  <center>
                    <img src="https://streak-stats.demolab.com?user=Abraham10VelGlez&locale=en&mode=daily&theme=dracula&hide_border=false&border_radius=5&order=3"
                      width="500"
                      height="150" alt="streak graph" />
                  </center>
                </CardContent>
              </Card>


              <Card className="bg-gray-700 hover:bg-gray-600 transition">
                <CardContent className="p-4">
                  <center>
                    <img src="https://github-profile-trophy.vercel.app?username=Abraham10VelGlez&theme=dracula&column=-1&row=1&margin-w=8&margin-h=8&no-bg=false&no-frame=false&order=4"
                      width="1000"
                      height="350" alt="trophy graph" />
                  </center>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>



      {/* Lista de proyectos */}
      <div className="w-full max-w-1xl mb-16">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Proyectos</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-gray-700 hover:bg-gray-600 transition">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Proyecto 1</h3>
                  <p className="text-sm mb-3 text-gray-300">Descripción breve del proyecto.</p>
                  <Button asChild variant="outline">
                    <a href="https://github.com/tuusuario/proyecto1" target="_blank">Ver en GitHub</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 hover:bg-gray-600 transition">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Proyecto 2</h3>
                  <p className="text-sm mb-3 text-gray-300">Otro proyecto destacado.</p>
                  <Button asChild variant="outline">
                    <a href="https://github.com/tuusuario/proyecto2" target="_blank">Ver en GitHub</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
