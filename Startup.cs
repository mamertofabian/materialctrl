using MaterialCtrl.Data;
using MaterialCtrl.Entities;
using MaterialCtrl.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MaterialCtrl {
    public class Startup {
        private IConfiguration _configuration;
        private IHostingEnvironment _environment;

        public Startup(IConfiguration configuration, IHostingEnvironment environment) {
            _configuration = configuration;
            _environment = environment;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services) {
            services.AddIdentity<User, IdentityRole>(config => {
                config.User.RequireUniqueEmail = true;
            }).AddEntityFrameworkStores<MaterialCtrlDbContext>();

            services.AddSingleton<IGreeter, Greeter>();
            services.AddDbContext<MaterialCtrlDbContext>(
                options => options.UseSqlServer(_configuration.GetConnectionString("MaterialCtrl")));
            services.AddTransient<MaterialCtrlDbSeeder>();
            services.AddScoped<IProjectData, SqlProjectData>();
            services.AddMvc(options => {
                if (_environment.IsProduction()) {
                    options.Filters.Add(new RequireHttpsAttribute());
                }
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IGreeter greeter) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseNodeModules(env.ContentRootPath);

            app.UseAuthentication();

            app.UseMvc(ConfigureRoutes);

            if (env.IsDevelopment()) {
                using (var scope = app.ApplicationServices.CreateScope()) {
                    var seeder = scope.ServiceProvider.GetService<MaterialCtrlDbSeeder>();
                    seeder.Seed().Wait();
                }
            }
        }

        private void ConfigureRoutes(IRouteBuilder routeBuilder) {
            routeBuilder.MapRoute("Default", "{controller=Home}/{action=Index}/{id?}");
        }
    }
}
