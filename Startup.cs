using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MaterialCtrl.Data;
using MaterialCtrl.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MaterialCtrl {
    public class Startup {
        private IConfiguration _configuration;

        public Startup(IConfiguration configuration) {
            _configuration = configuration;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services) {
            services.AddSingleton<IGreeter, Greeter>();
            services.AddDbContext<MaterialCtrlDbContext>(
                options => options.UseSqlServer(_configuration.GetConnectionString("MaterialCtrl")));
            services.AddTransient<MaterialCtrlDbSeeder>();
            services.AddScoped<IProjectData, SqlProjectData>();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IGreeter greeter) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();

            app.UseMvc(ConfigureRoutes);

            if (env.IsDevelopment()) {
                // seed the database
                using (var scope = app.ApplicationServices.CreateScope()) {
                    var seeder = scope.ServiceProvider.GetService<MaterialCtrlDbSeeder>();
                    seeder.Seed();
                }
            }

            //app.Run(async (context) => {
            //    await context.Response.WriteAsync(greeter.GetMessageOfTheDay());
            //});
        }

        private void ConfigureRoutes(IRouteBuilder routeBuilder) {
            routeBuilder.MapRoute("Default", "{controller=Home}/{action=Index}/{id?}");
        }
    }
}
