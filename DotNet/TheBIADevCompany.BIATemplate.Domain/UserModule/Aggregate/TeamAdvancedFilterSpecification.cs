// <copyright file="TeamAdvancedFilterSpecification.cs" company="TheBIADevCompany">
//     Copyright (c) TheBIADevCompany. All rights reserved.
// </copyright>

namespace TheBIADevCompany.BIATemplate.Domain.UserModule.Aggregate
{
    using System.Linq;
    using BIA.Net.Core.Domain.Dto.Base;
    using BIA.Net.Core.Domain.Specification;
    using Newtonsoft.Json;
    using TheBIADevCompany.BIATemplate.Domain.Dto.Site;
    using TheBIADevCompany.BIATemplate.Domain.Dto.User;

    /// <summary>
    /// The specifications of the site entity.
    /// </summary>
    /// <typeparam name="TTeam">The type of team.</typeparam>
    public static class TeamAdvancedFilterSpecification<TTeam>
        where TTeam : Team
    {
        /// <summary>
        /// Search site using the filter.
        /// </summary>
        /// <param name="filter">The filter.</param>
        /// <returns>
        /// The specification.
        /// </returns>
        public static Specification<TTeam> Filter(PagingFilterFormatDto filter)
        {
            Specification<TTeam> specification = new TrueSpecification<TTeam>();
            if (filter.AdvancedFilter != null)
            {
                TeamAdvancedFilterDto advancedFilter = JsonConvert.DeserializeObject<TeamAdvancedFilterDto>(filter.AdvancedFilter.ToString());
                if (advancedFilter.UserId > 0)
                {
                    specification &= new DirectSpecification<TTeam>(s =>
                        s.Members.Any(a => a.UserId == advancedFilter.UserId));
                }
            }

            return specification;
        }
    }
}