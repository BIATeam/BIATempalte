// <copyright file="TeamLinkedControllerBase.cs" company="TheBIADevCompany">
//     Copyright (c) TheBIADevCompany. All rights reserved.
// </copyright>

namespace TheBIADevCompany.BIATemplate.Presentation.Api.Controllers.Base
{
    using System.Threading.Tasks;
    using BIA.Net.Core.Domain.Dto.User;
    using BIA.Net.Presentation.Api.Controllers.Base;
    using TheBIADevCompany.BIATemplate.Application.User;
    using TheBIADevCompany.BIATemplate.Crosscutting.Common.Enum;

    /// <summary>
    /// The API controller used to manage views.
    /// </summary>
    public abstract class TeamLinkedControllerBase : BiaControllerBase
    {
        /// <summary>
        /// The service team.
        /// </summary>
        private readonly ITeamAppService teamAppService;

        /// <summary>
        /// Initializes a new instance of the <see cref="TeamLinkedControllerBase"/> class.
        /// </summary>
        /// <param name="teamAppService">The team service.</param>
        protected TeamLinkedControllerBase(ITeamAppService teamAppService)
        {
            this.teamAppService = teamAppService;
        }

        /// <summary>
        /// Check autorize based on teamId.
        /// </summary>
        /// <param name="teamId">the teamId.</param>
        /// <param name="roleSuffix">the last part of the permission.</param>
        /// <returns>true if authorized.</returns>
        protected async Task<bool> IsAuthorizeForTeam(int teamId, string roleSuffix)
        {
            TeamDto teamDto = await this.teamAppService.GetAsync(id: teamId);
            if (teamDto == null)
            {
                return false;
            }

            return this.IsAuthorizeForTeamType((TeamTypeId)teamDto.TeamTypeId, teamId, roleSuffix);
        }

        /// <summary>
        /// Check autorize based on teamTypeId.
        /// </summary>
        /// <param name="teamTypeId">the type team Id.</param>
        /// <param name="teamId">the team Id.</param>
        /// <param name="roleSuffix">the last part of the permission.</param>
        /// <returns>true if authorized.</returns>
        private bool IsAuthorizeForTeamType(TeamTypeId teamTypeId, int teamId, string roleSuffix)
        {
            return this.teamAppService.IsAuthorizeForTeamType(this.HttpContext.User, teamTypeId, teamId, roleSuffix);
        }
    }
}