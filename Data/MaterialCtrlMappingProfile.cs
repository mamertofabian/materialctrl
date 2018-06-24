using AutoMapper;
using MaterialCtrl.Entities;
using MaterialCtrl.ViewModels;

namespace MaterialCtrl.Data {
    public class MaterialCtrlMappingProfile : Profile
    {
        public MaterialCtrlMappingProfile() {
            CreateMap<PurchaseOrder, PurchaseOrderViewModel>()
                .ForMember(m => m.OrderId, vm => vm.MapFrom(f => f.Id))
                .ReverseMap();

            CreateMap<PurchaseOrderItem, PurchaseOrderItemViewModel>()
                .ReverseMap();
        }
    }
}
