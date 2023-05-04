// <copyright file="DefaultViewDto.cs" company="TheBIADevCompany">
//     Copyright (c) TheBIADevCompany. All rights reserved.
// </copyright>

namespace TheBIADevCompany.BIATemplate.Domain.Dto.View
{
    /// <summary>
    /// Default View Dto.
    /// </summary>
    public class DefaultViewDto
    {
        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the table identifier.
        /// </summary>
        public string TableId { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether this instance is default.
        /// </summary>
        public bool IsDefault { get; set; }
    }
}