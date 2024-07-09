// <copyright file="SiteAppService.cs" company="TheBIADevCompany">
//     Copyright (c) TheBIADevCompany. All rights reserved.
// </copyright>

namespace TheBIADevCompany.BIATemplate.Application.Site
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Principal;
    using System.Threading.Tasks;
    using BIA.Net.Core.Domain.Authentication;
    using BIA.Net.Core.Domain.Dto.Base;
    using BIA.Net.Core.Domain.Dto.User;
    using BIA.Net.Core.Domain.RepoContract;
    using BIA.Net.Core.Domain.Service;
    using BIA.Net.Core.Domain.Specification;
    using TheBIADevCompany.BIATemplate.Application.User;
    using TheBIADevCompany.BIATemplate.Crosscutting.Common;
    using TheBIADevCompany.BIATemplate.Crosscutting.Common.Enum;
    using TheBIADevCompany.BIATemplate.Domain.Dto.Site;
    using TheBIADevCompany.BIATemplate.Domain.SiteModule.Aggregate;
    using TheBIADevCompany.BIATemplate.Domain.UserModule.Aggregate;

    /// <summary>
    /// The application service used for site.
    /// </summary>
    public class SiteAppService : CrudAppServiceBase<SiteDto, Site, int, PagingFilterFormatDto, SiteMapper>, ISiteAppService
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SiteAppService"/> class.
        /// </summary>
        /// <param name="repository">The repository.</param>
        /// <param name="principal">The claims principal.</param>
        public SiteAppService(ITGenericRepository<Site, int> repository, IPrincipal principal)
            : base(repository)
        {
            this.FiltersContext.Add(
                AccessMode.Read,
                TeamAppService.ReadSpecification<Site>(TeamTypeId.Site, principal));

            this.FiltersContext.Add(
                AccessMode.Update,
                TeamAppService.UpdateSpecification<Site>(TeamTypeId.Site, principal));
        }
    }
}