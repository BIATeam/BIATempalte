// <copyright file="NotificationTranslation.cs" company="TheBIADevCompany">
//     Copyright (c) TheBIADevCompany. All rights reserved.
// </copyright>

namespace TheBIADevCompany.BIATemplate.Domain.TranslationModule.Aggregate
{
    using BIA.Net.Core.Domain;
    using BIA.Net.Core.Domain.TranslationModule.Aggregate;
    using TheBIADevCompany.BIATemplate.Domain.NotificationModule.Aggregate;

    /// <summary>
    /// The role entity.
    /// </summary>
    public class NotificationTranslation : VersionedTable, IEntity
    {
        /// <summary>
        /// Gets or sets the id.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the language.
        /// </summary>
        public Language Language { get; set; }

        /// <summary>
        /// Gets or sets the language id.
        /// </summary>
        public int LanguageId { get; set; }

        /// <summary>
        ///  Gets or sets the notification type.
        /// </summary>
        public Notification Notification { get; set; }

        /// <summary>
        /// Gets or sets the notification type id.
        /// </summary>
        public int NotificationId { get; set; }

        /// <summary>
        /// Gets or sets the title translated.
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Gets or sets the description translated.
        /// </summary>
        public string Description { get; set; }
    }
}