using AutoMapper;
using MaterialCtrl.Entities;
using MaterialCtrl.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialCtrl.Data
{
    public class MaterialCtrlMappingProfile : Profile
    {
        public MaterialCtrlMappingProfile() {
            CreateMap<Order, OrderViewModel>()
                .ForMember(m => m.OrderId, vm => vm.MapFrom(f => f.Id))
                .ReverseMap();
        }
    }
}
