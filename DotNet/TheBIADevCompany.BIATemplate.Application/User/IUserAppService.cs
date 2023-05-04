// <copyright file="IUserAppService.cs" company="TheBIADevCompany">
//     Copyright (c) TheBIADevCompany. All rights reserved.
// </copyright>

namespace TheBIADevCompany.BIATemplate.Application.User
{
    using System;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using System.Threading.Tasks;
    using BIA.Net.Core.Domain.Dto;
    using BIA.Net.Core.Domain.Dto.Base;
    using BIA.Net.Core.Domain.Dto.Option;
    using BIA.Net.Core.Domain.Dto.User;
    using BIA.Net.Core.Domain.RepoContract.QueryCustomizer;
    using BIA.Net.Core.Domain.Service;
    using BIA.Net.Core.Domain.Specification;
    using TheBIADevCompany.BIATemplate.Domain.Dto.User;
    using TheBIADevCompany.BIATemplate.Domain.UserModule.Aggregate;

    /// <summary>
    /// The interface defining the application service for user.
    /// </summary>
    public interface IUserAppService : IFilteredServiceBase<User, int>
    {
        /// <summary>
        /// Gets all option that I can see.
        /// </summary>
        /// <param name="filter">Used to filter the users.</param>
        /// /// <returns>The list of production sites.</returns>
        Task<IEnumerable<OptionDto>> GetAllOptionsAsync(string filter = null);

        /// <summary>
        /// Get the DTO list with paging and sorting.
        /// </summary>
        /// <param name="filters">The filters.</param>
        /// <param name="id">The id.</param>
        /// <param name="specification">Specification Used to filter query.</param>
        /// <param name="filter">Filter Query.</param>
        /// <param name="accessMode">The acces Mode (Read, Write delete, all ...). It take the corresponding filter.</param>
        /// <param name="queryMode">The queryMode use to customize query (repository functions CustomizeQueryBefore and CustomizeQueryAfter).</param>
        /// <param name="mapperMode">A string to adapt the mapper function DtoToEntity.</param>
        /// <returns>The list of DTO.</returns>
        Task<(IEnumerable<UserDto> Results, int Total)> GetRangeAsync(
            PagingFilterFormatDto filters = null,
            int id = 0,
            Specification<User> specification = null,
            Expression<Func<User, bool>> filter = null,
            string accessMode = AccessMode.Read,
            string queryMode = QueryMode.ReadList,
            string mapperMode = null);

        /// <summary>
        /// Gets user info with its sid and create if not exist.
        /// </summary>
        /// <param name="sid">The sid to search in ldap with.</param>
        /// <param name="login">The login to check in ldap.</param>
        /// <returns>The user.</returns>
        Task<UserInfoDto> CreateUserInfoFromLdapAsync(string sid, string login);

        /// <summary>
        /// Gets user info with its login.
        /// </summary>
        /// <param name="login">The login to search with.</param>
        /// <returns>The user.</returns>
        Task<UserInfoDto> GetUserInfoAsync(string login);

        /// <summary>
        /// Get all roles for a user with its sid.
        /// </summary>
        /// <param name="isUserInDB">true if user is in database.</param>
        /// <param name="sid">The user sid.</param>
        /// <returns>The list of roles.</returns>
        Task<List<string>> GetUserDirectoryRolesAsync(bool isUserInDB, string sid);

        /// <summary>
        /// Gets the profile of the given user.
        /// </summary>
        /// <param name="login">The user login.</param>
        /// <returns>The user profile.</returns>
        Task<UserProfileDto> GetUserProfileAsync(string login);

        /// <summary>
        /// Gets all AD user corresponding to a filter.
        /// </summary>
        /// <param name="filter">The filter.</param>
        /// <param name="ldapName">The name of the LDAP domain to search in.</param>
        /// <param name="max">The max number of items to return.</param>
        /// <returns>The top 10 users found.</returns>
        Task<IEnumerable<UserFromDirectoryDto>> GetAllADUserAsync(string filter, string ldapName = null, int max = 10);

        /// <summary>
        /// Add a list of users in a group in AD.
        /// </summary>
        /// <param name="users">The list of users to add.</param>
        /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
        Task<ResultAddUsersFromDirectoryDto> AddFromDirectory(IEnumerable<UserFromDirectoryDto> users);

        /// <summary>
        /// Remove a user in a group in AD.
        /// </summary>
        /// <param name="id">The identifier of the user to remove.</param>
        /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
        Task<string> RemoveInGroupAsync(int id);

        /// <summary>
        /// Synchronize the users with the AD.
        /// </summary>
        /// <param name="fullSynchro">If true resynchronize existing user.</param>
        /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
        Task SynchronizeWithADAsync(bool fullSynchro = false);

        /// <summary>
        /// Updates the last login date.
        /// </summary>
        /// <param name="userId">The user identifier.</param>
        /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
        Task UpdateLastLoginDateAndActivate(int userId);

        /// <summary>
        /// Selects the default language.
        /// </summary>
        /// <param name="userInfo">The user information.</param>
        void SelectDefaultLanguage(UserInfoDto userInfo);

        /// <summary>
        /// Return all domain with conatinning users.
        /// </summary>
        /// <returns>List of dommain keys.</returns>
        Task<List<string>> GetAllLdapUsersDomains();

        /// <summary>
        /// Generates CSV content.
        /// </summary>
        /// <param name="filters">Represents the columns and their traductions.</param>
        /// <returns>A <see cref="Task"/> holding the buffered data to return in a file.</returns>
        Task<byte[]> ExportCSV(PagingFilterFormatDto filters);
    }
}